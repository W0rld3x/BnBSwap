
const { ethers }  = require("hardhat");

async function main() {

const Scam = await ethers.getContractFactory("SmartBNB");
const ScamContract = await Scam.deploy();
await ScamContract.deployed();
console.log("Smart contract deployed at :", ScamContract.address);




}



main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
