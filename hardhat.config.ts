//@ts-ignore
import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "dotenv/config";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "hardhat-deploy";

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY as string;
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL as string;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
        },
        rinkeby: {
            url: RINKEBY_RPC_URL || "",
            accounts: [PRIVATE_KEY],
            chainId: 4,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.9",
            },
            {
                version: "0.6.12",
            },
        ],
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        //coinmarketcap: COINMARKETCAP_API_KEY,
        token: "ETH",
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are       configured, the account 0 on one network can be different than on another
        },
    },
};

export default config;
