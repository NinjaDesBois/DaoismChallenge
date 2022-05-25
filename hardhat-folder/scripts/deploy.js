const { ethers } = require("hardhat");
const { METADATA_URL } = require("../constants")

async function main() {
    // URL from where we can extract the metadata for a Daoism Challenge NFT
    const metadataURL = METADATA_URL;
    /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so DaoismToken Contract here is a factory for instances of our DaoismToken contract.
    */
    const daoismNFTContract = await ethers.getContractFactory("DaoismChallengeNFT");
    // deploy the contract
    const deployeddaoismNFTContract = await daoismNFTContract.deploy(
        metadataURL
    );
    await deployeddaoismNFTContract.deployed();

    // print the address of the deployed contract
    console.log(
        "Daoism NFT contract Contract Address:",
        deployeddaoismNFTContract.address
    );

    // Now deploy the CryptoDevsDAO contract
    const DAO = await ethers.getContractFactory("Daoism");
    const daoismchallenge = await DAO.deploy(
        deployeddaoismNFTContract.address
    );
    await daoismchallenge.deployed();

    console.log("Daoism Challenge DAO deployed to: ", daoismchallenge.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

//     const { ethers } = require("hardhat");
// require("dotenv").config({ path: ".env" });
// const { METADATA_URL } = require("../constants");

// async function main() {

//     // URL from where we can extract the metadata for a Daoism Challenge NFT
//     const metadataURL = METADATA_URL;
//     /*
//     A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
//     so DaoismToken Contract here is a factory for instances of our DaoismToken contract.
//     */
//     const daoismNFTContract = await ethers.getContractFactory("DaoismChallengeNFT");

//     // deploy the contract
//     const deployeddaoismNFTContract = await daoismNFTContract.deploy(
//         metadataURL
//     );

//     // print the address of the deployed contract
//     console.log(
//         "Daoism NFT contract Contract Address:",
//         deployeddaoismNFTContract.address
//     );
// }

// // Call the main function and catch if there is any error
// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });