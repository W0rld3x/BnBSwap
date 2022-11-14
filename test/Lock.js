const { ethers } = require("hardhat");
const { expect } = require('chai');


describe("Deploy [SmartBNB] token", function () {

  let deployer, otherUser;
  
  before(async function() {

      const contract = await ethers.getContractAt("SmartBNB");
      const contractBNB = await contract.deploy();
      await contractBNB.deployed();

    expect(contractBNB).to.equal(contractBNB.address);

  })

  it()




})