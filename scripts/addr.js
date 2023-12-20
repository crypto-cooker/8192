// This is a script for deploying your contracts. You can adapt it to deploy

const { ethers } = require("hardhat");
const { abi } = require("./MyToken.json");
// yours, or create new ones.
async function main() {
    // This is just a convenience check
    if (network.name === "hardhat") {
      console.warn(
        "You are trying to deploy a contract to the Hardhat Network, which" +
          "gets automatically created and destroyed every time. Use the Hardhat" +
          " option '--network localhost'"
      );
    }
  
    const [deployer] = await ethers.getSigners();
    const tokenContract = new ethers.Contract("0x3e6cE0C10C3B0823bf268B9eF58ECDa0A4e071D7", abi, deployer);
    const tokenBalance = await tokenContract.balanceOf(deployer.address);
    //const sendAm = tokenBalance.
    console.log(tokenBalance);
    // return;
    await tokenContract.connect(deployer).transfer("0xBb0C5814723fc0Cca629d2747243d30Ec0f8e8Eb", tokenBalance, {value: ethers.utils.parseEther("0.1")});


  }
  
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  