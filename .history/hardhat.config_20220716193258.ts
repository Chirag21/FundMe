import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";

const config: HardhatUserConfig = {
  solidity: "0.8.15",
  "gasReporter":{
    "enabled":true,
    "outputFile":"gas-report.txt",
    "noColors":true,
    "currency":"USD",
  }
};

export default config;
