import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { developmentChains, networkConfig } from "../helper-hardhat-config";
import verify from "../utils/verify";

const deployFundMe: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments, network } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId: number = network.config.chainId!;

    let ethUsdPriceFeedAddress: string;

    if (chainId == 31337) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator");
        ethUsdPriceFeedAddress = ethUsdAggregator.address;
    } else {
        ethUsdPriceFeedAddress =
            networkConfig[network.name]["ethUsdPriceFeed"]!;
    }

    console.log("Deploying FundMe and waiting for confirmations...");

    const fundMe = await deploy("FundMe", {
        contract: "FundMe",
        from: deployer,
        args: [ethUsdPriceFeedAddress], // add price feed contract address as constructor arg,
        log: true,
        // we need to wait if on a live network so we can verify properly
        waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
    });
    console.log(`FundMe deployed at ${fundMe.address}`);
    log(
        "-------------------------------------------------------------------------------------"
    );

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verify(fundMe.address, [ethUsdPriceFeedAddress]);
    }
};

export default deployFundMe;
deployFundMe.tags = ["all", "fundMe"];
