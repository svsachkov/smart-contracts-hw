const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token", function () {
  it("Should have the correct initial supply", async function () {
    const initialSupply = ethers.utils.parseEther('10000.0')
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy(initialSupply);
    await token.deployed();

    expect(await token.totalSupply()).to.equal(initialSupply);
  });
});