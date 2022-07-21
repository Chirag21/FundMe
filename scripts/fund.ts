import { TransactionResponse } from "@ethersproject/providers";
import { ethers, getNamedAccounts } from "hardhat";
import { FundMe } from "../typechain-types";

async function main() {
    const { deployer } = await getNamedAccounts();
    const fundMe: FundMe = await ethers.getContract("FundMe", deployer);
    console.log("Funding contract...");
    const transactionResponse: TransactionResponse = await fundMe.fund({
        value: ethers.utils.parseEther("0.1"),
    });

    await transactionResponse.wait(1);
    console.log("Contract funded.");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
