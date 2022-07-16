import { HardhatUserConfig } from "hardhat/config";
import "@hardh";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";
import "solidity-coverage"; 
import "dotenv/config";
import "@nomiclabs/hardhat-ethers";

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.15",
  "gasReporter":{
    "enabled":false,
    "outputFile":"gas-report.txt",
    "noColors":true,
    "currency":"USD",
    coinmarketcap:COINMARKETCAP_API_KEY,
  }
};

export default config;
