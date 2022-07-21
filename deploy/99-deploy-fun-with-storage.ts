import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deployFunWithStorage: DeployFunction = async (
    hre: HardhatRuntimeEnvironment
) => {
    const { getNamedAccounts, deployments } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    log(
        "-------------------------------------------------------------------------------------"
    );

    log("Deploying FunWithStorage. Waiting for confirmations...");

    const funWithStorage = await deploy("FunWithStorage", {
        from: deployer,
        args: [],
        log: true,
        //waitConfirmations: networkConfig.waitConfirmations.blockConfirmations || 1,
    });

    log("Logging storage");

    for (let i = 1; i < 10; i++) {
        log(
            `Location ${i}: ${await ethers.provider.getStorageAt(
                funWithStorage.address,
                i
            )}`
        );
    }

    // You can use this to trace!
    // const trace = await network.provider.send("debug_traceTransaction", [
    //     funWithStorage.transactionHash,
    // ])
    // for (structLog in trace.structLogs) {
    //     if (trace.structLogs[structLog].op == "SSTORE") {
    //         console.log(trace.structLogs[structLog])
    //     }
    // }
    // const firstelementLocation = ethers.utils.keccak256(
    //     "0x0000000000000000000000000000000000000000000000000000000000000002"
    // )
    // const arrayElement = await ethers.provider.getStorageAt(
    //     funWithStorage.address,
    //     firstelementLocation
    // )
    // log(`Location ${firstelementLocation}: ${arrayElement}`)

    // Write a function that finds storage slot the arrays and mappings
    // Add mapping in the contract
    // And then find tha data in that slot
};

export default deployFunWithStorage;
deployFunWithStorage.tags = ["all", "storage"];
