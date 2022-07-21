import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const DECIMALS = "18";
const INITIAL_PRICE = "2000000000000000000000"; // 2000

const deployMocks: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments, network } = hre;
    const { deployer } = await getNamedAccounts();
    const { deploy, log } = deployments;

    const chainId = network.config.chainId;

    // if the contract does not exist, we deploy a minimal version of the contract for local testing as a mock
    if (chainId == 31337) {
        console.log("Local network detected! Deploying mocks.");
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_PRICE],
        });
        log("Mocks deployed!");
        log(
            "-------------------------------------------------------------------------------------"
        );
        log(
            "You are deploying to a local network, you'll need a local network running to interact"
        );
        log(
            "Please run `yarn hardhat console` to interact with the deployed smart contracts!"
        );
        log("----------------------------------");
    }
};

export default deployMocks;
deployMocks.tags = ["all", "mocks"];
