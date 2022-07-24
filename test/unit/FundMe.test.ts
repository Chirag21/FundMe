import {
    TransactionReceipt,
    TransactionResponse,
} from "@ethersproject/providers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { assert, expect } from "chai";
import { BigNumber } from "ethers";
import { deployments, ethers, network } from "hardhat";
import { developmentChains } from "../../helper-hardhat-config";
import { FundMe, MockV3Aggregator } from "../../typechain-types/";

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("FundMe", () => {
          let fundMe: FundMe;
          let deployer: SignerWithAddress;
          let mockV3Aggregator: MockV3Aggregator;
          const sendValue: BigNumber = ethers.utils.parseEther("1"); // 1ETH or 1e18 wei
          let accounts: SignerWithAddress[];

          beforeEach(async () => {
              if (!developmentChains.includes(network.name)) {
                  throw "You need to be on a development chain to run tests";
              }
              accounts = await ethers.getSigners();
              deployer = accounts[0];
              await deployments.fixture(["all"]);
              fundMe = await ethers.getContract("FundMe");
              mockV3Aggregator = await ethers.getContract("MockV3Aggregator");
          });

          describe("constructor", () => {
              it("Sets the aggregator address correctly", async () => {
                  const response = await fundMe.getPriceFeed();
                  assert.equal(response, mockV3Aggregator.address);
              });
              it("Sets the owner correctly", async () => {
                  const response = await fundMe.getOwner();
                  assert.equal(response, deployer.address);
              });
          });

          describe("fund", () => {
              it("Fails if you don't send enough ether", async () => {
                  expect(fundMe.fund()).to.be.revertedWith(
                      "Did not send enough!"
                  );
              });
              it("Updates the amount funded", async () => {
                  await fundMe.fund({ value: sendValue });
                  const response = await fundMe.getAddressToAmountFunded(
                      deployer.address
                  );
                  assert.equal(response.toString(), sendValue.toString());
              });
              it("Adds funder to array of funders", async () => {
                  await fundMe.fund({ value: sendValue });
                  const funder = await fundMe.getFunder(0);
                  assert.equal(funder, deployer.address);
              });
          });

          describe("Withdraw", () => {
              beforeEach(async () => {
                  await fundMe.fund({ value: sendValue });
              });

              it("Only allows the owner to withdraw", async () => {
                  await expect(
                      fundMe.connect(accounts[1]).withdraw()
                  ).to.be.revertedWithCustomError(fundMe, "FundMe__NotOwner");
              });

              it("Gives a single funder all their ETH back", async () => {
                  // Arrange
                  const startingFundMeBalance =
                      await fundMe.provider.getBalance(fundMe.address);
                  const startingDeployerBalance =
                      await fundMe.provider.getBalance(deployer.address);
                  // Act
                  const transactionResponse: TransactionResponse =
                      await fundMe.withdraw();

                  const transactionReceipt: TransactionReceipt =
                      await transactionResponse.wait(1);

                  // Calculate gas used for the withdrawal transaction
                  const { gasUsed, effectiveGasPrice } = transactionReceipt;
                  const gasCost = gasUsed.mul(effectiveGasPrice);

                  const endingFundMeBalance = await fundMe.provider.getBalance(
                      fundMe.address
                  );
                  const endingDeployerBalance =
                      await fundMe.provider.getBalance(deployer.address);
                  // Assert
                  assert.equal(endingFundMeBalance.toString(), "0");
                  assert.equal(
                      startingFundMeBalance
                          .add(startingDeployerBalance)
                          .toString(),
                      endingDeployerBalance.add(gasCost).toString()
                  );
              });

              it("Allows withdrawing funds with multiple funders", async () => {
                  // Start with 1 because 0th index is the deployer account
                  for (let i = 1; i < 6; i++) {
                      await fundMe
                          .connect(accounts[i])
                          .fund({ value: sendValue });
                  }
                  const startingFundMeBalance =
                      await fundMe.provider.getBalance(fundMe.address);
                  const startingDeployerBalance =
                      await fundMe.provider.getBalance(deployer.address);

                  const transactionResponse: TransactionResponse =
                      await fundMe.withdraw();
                  const transactionReceipt: TransactionReceipt =
                      await transactionResponse.wait(1);
                  const { gasUsed, effectiveGasPrice } = transactionReceipt;
                  const gasCost = gasUsed.mul(effectiveGasPrice);

                  const endingFundMeBalance = await fundMe.provider.getBalance(
                      fundMe.address
                  );
                  const endingDeployerBalance =
                      await fundMe.provider.getBalance(deployer.address);

                  assert.equal(endingFundMeBalance.toString(), "0");
                  assert.equal(
                      startingFundMeBalance
                          .add(startingDeployerBalance)
                          .toString(),
                      endingDeployerBalance.add(gasCost).toString()
                  );

                  // make sure funders are reset properly
                  expect(fundMe.getFunder(0)).to.be.reverted;

                  // amount funded should be reduced
                  for (let i = 1; i < 6; i++) {
                      assert.equal(
                          (
                              await fundMe.getAddressToAmountFunded(
                                  accounts[i].address
                              )
                          ).toString(),
                          "0"
                      );
                  }
              });
          });

          describe("Cheaper withdraw multiple funders", () => {
              beforeEach(async () => {
                  await fundMe.fund({ value: sendValue });
              });

              it("Only allows the owner to withdraw", async () => {
                  await expect(
                      fundMe.connect(accounts[1]).cheaperWithdraw()
                  ).to.be.revertedWithCustomError(fundMe, "FundMe__NotOwner");
              });

              it("Cheaper withdraw single funder", async () => {
                  // Arrange
                  const startingFundMeBalance =
                      await fundMe.provider.getBalance(fundMe.address);
                  const startingDeployerBalance =
                      await fundMe.provider.getBalance(deployer.address);
                  // Act
                  const transactionResponse: TransactionResponse =
                      await fundMe.cheaperWithdraw();

                  const transactionReceipt: TransactionReceipt =
                      await transactionResponse.wait(1);

                  // Calculate gas used for the withdrawal transaction
                  const { gasUsed, effectiveGasPrice } = transactionReceipt;
                  const gasCost = gasUsed.mul(effectiveGasPrice);

                  const endingFundMeBalance = await fundMe.provider.getBalance(
                      fundMe.address
                  );
                  const endingDeployerBalance =
                      await fundMe.provider.getBalance(deployer.address);
                  // Assert
                  assert.equal(endingFundMeBalance.toString(), "0");
                  assert.equal(
                      startingFundMeBalance
                          .add(startingDeployerBalance)
                          .toString(),
                      endingDeployerBalance.add(gasCost).toString()
                  );
              });

              it("Cheaper withdraw multiple funders", async () => {
                  // Start with 1 because 0th index is the deployer account
                  for (let i = 1; i < 6; i++) {
                      await fundMe
                          .connect(accounts[i])
                          .fund({ value: sendValue });
                  }
                  const startingFundMeBalance =
                      await fundMe.provider.getBalance(fundMe.address);
                  const startingDeployerBalance =
                      await fundMe.provider.getBalance(deployer.address);

                  const transactionResponse: TransactionResponse =
                      await fundMe.cheaperWithdraw();
                  const transactionReceipt: TransactionReceipt =
                      await transactionResponse.wait(1);
                  const { gasUsed, effectiveGasPrice } = transactionReceipt;
                  const gasCost = gasUsed.mul(effectiveGasPrice);

                  const endingFundMeBalance = await fundMe.provider.getBalance(
                      fundMe.address
                  );
                  const endingDeployerBalance =
                      await fundMe.provider.getBalance(deployer.address);

                  assert.equal(endingFundMeBalance.toString(), "0");
                  assert.equal(
                      startingFundMeBalance
                          .add(startingDeployerBalance)
                          .toString(),
                      endingDeployerBalance.add(gasCost).toString()
                  );

                  // make sure funders are reset properly
                  expect(fundMe.getFunder(0)).to.be.reverted;

                  // amount funded should be reduced
                  for (let i = 1; i < 6; i++) {
                      assert.equal(
                          (
                              await fundMe.getAddressToAmountFunded(
                                  accounts[i].address
                              )
                          ).toString(),
                          "0"
                      );
                  }
              });
          });
      });
