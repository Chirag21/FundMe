import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";
import ""; 
import dotenv from "dotenv"
dotenv.config();

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
