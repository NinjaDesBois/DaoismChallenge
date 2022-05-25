const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DaoismChallengeNFT contract", function() {
    let DaoismChallengeToken;
    let token721;
    let _name = 'DaoismChallenge';
    let _symbol = 'DC';
    let _baseTokenURI = 'https://gateway.pinata.cloud/ipfs/QmXgjoa6SWs1nj6gGtpcvAD1ev24gNT6UighgyWYvgEsaV'
    let account1, otheraccounts;
    let tokenId = '0';

    beforeEach(async function() {
        DaoismChallengeToken = await ethers.getContractFactory("DaoismChallengeNFT");
        [owner, account1, ...otheraccounts] = await ethers.getSigners();

        token721 = await DaoismChallengeToken.deploy(_baseTokenURI);
    });


    describe("Deployment", function() {

        it("Should has the correct name ,symbol , total supply and maxtokenIds ", async function() {
            expect(await token721.name()).to.equal(_name);
            expect(await token721.symbol()).to.equal(_symbol);
            expect(await token721.totalSupply()).to.equal('0');
            expect(await token721.maxTokenIds()).to.equal('20');
        });
        // it("Should return the TokenURI", async function() {
        //     expect(await token721._baseURI()).to.equal(_baseTokenURI);
        // });
        it('correctly mints a NFT', async function() {
            expect(await token721.connect(account1).mint({
                value: ethers.utils.parseEther("0.1")
            })).to.emit(token721, 'Transfer');
            expect(await token721.balanceOf(account1.address)).to.equal(1);
        });

        it("returns correct balanceOf with token ID 1 & 2 to account1", async function() {
            const address1 = owner.address;
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

        it("Correctly returns the right tokenURI", async function() {
            expect(await token721.connect(account1).mint({
                value: ethers.utils.parseEther("0.1")
            })).to.emit(token721, 'Transfer');
            expect(await token721.tokenURI('1')).to.equal(`${_baseTokenURI}1`);
        })



    });


});
