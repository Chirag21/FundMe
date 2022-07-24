import { getNamedAccounts, ethers, network } from "hardhat";
import { FundMe } from "../../typechain-types";
import { developmentChains } from "../../helper-hardhat-config";
import { assert } from "chai";
import { providers } from "ethers";

developmentChains.includes(network.name)
    ? describe.skip
    : describe("FundMe", () => {
          let fundMe: FundMe;
          let deployer: string;
          const sendValue = ethers.utils.parseEther("1");
          beforeEach(async () => {
              deployer = (await getNamedAccounts()).deployer;
              fundMe = await ethers.getContract("FundMe", deployer);
              console.log(`Contract address: ${fundMe.address}`);
              console.log(deployer);
              console.log(await fundMe.provider.getBalance(deployer));
          });

          it("Allows people to fund and withdraw", async () => {
              await fundMe.fund({ value: sendValue });
              await fundMe.withdraw();
              const endingBalance = await fundMe.provider.getBalance(
                  fundMe.address
              );
              assert.equal(endingBalance.toString(), "0");
          });
      });
