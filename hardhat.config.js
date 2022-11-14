require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s3.binance.org:8545",
      accounts: [process.env.PRIVATE_KEY]
    }
  },  
  etherscan: {
    apiKey: process.env.BSC_SCAN
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}