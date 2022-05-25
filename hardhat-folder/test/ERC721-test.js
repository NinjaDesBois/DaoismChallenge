const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DaoismChallengeNFT contract", function() {
    let DaoismChallengeToken;
    let token721;
    let _name = 'DaoismChallenge';
    let _symbol = 'DC';
    let _baseTokenURI = 'defefedcew'
    let account1, otheraccounts;
    let tokenId = '0';

    beforeEach(async function() {
        DaoismChallengeToken = await ethers.getContractFactory("DaoismChallengeNFT");
        [owner, account1, ...otheraccounts] = await ethers.getSigners();

        token721 = await DaoismChallengeToken.deploy(_baseTokenURI);
    });


    describe("Deployment", function() {

        it("Should has the correct name and symbol ", async function() {
            expect(await token721.name()).to.equal(_name);
            expect(await token721.symbol()).to.equal(_symbol);
        });

        it("Should mint a token with token ID 1 & 2 to account1", async function() {
            const address1 = owner.address;
            // const instance = await MyContract.at(contractAddress);

            await token721.mint({

                value: ethers.utils.parseEther("0.1")
            });

            expect(await token721.ownerOf(1)).to.equal(address1);

            await token721.mint({

                value: ethers.utils.parseEther("0.1")
            });

            expect(await token721.ownerOf(2)).to.equal(address1);

            expect(await token721.balanceOf(address1)).to.equal(2);
        });
    });
});