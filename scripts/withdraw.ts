import { TransactionResponse } from "@ethersproject/providers";
import { getNamedAccounts, ethers } from "hardhat";
import { FundMe } from "../typechain-types";
async function main() {
    const { deployer } = await getNamedAccounts();
    const fundMe: FundMe = await ethers.getContract("FundMe", deployer);
    console.log("Withdrawing funds...");
    const transactionResponse: TransactionResponse = await fundMe.withdraw();
    await transactionResponse.wait(1);
    console.log("Withdraw done.");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
