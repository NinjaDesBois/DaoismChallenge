// import { Contract, providers, utils } from "ethers";
// import Head from "next/head";
// import React, { useEffect, useRef, useState } from "react";
// import Web3Modal from "web3modal";
// import { abi, NFT_CONTRACT_ADDRESS } from "../constants";
import styles from "../styles/Home.module.css";
import Link from "next/link"
export default function Home() {
 
  
  
 return (
    <div className={styles.container}>
 <h2 className={styles.title}>
          Welcome to My Daoism Challenge project
        </h2>
      <main className={styles.main}>
       
        <div className={styles.rules}>
          Rules : The challenger would have to create a custom ERC721 based voting app, that will allow ERC721 token holders to create,vote and execute on proposals to add/sub 1 to/from a counter variable.
        </div>

        <div className={styles.grid}>
        <Link href="/Mint" >
            <a className={styles.card}>
            <button className={styles.button}>Mint your DC NFT and be a member of our great DAO &rarr;</button>
            </a>
          </Link>
          <Link href="/Dao" >
            <a className={styles.card}>
            <button className={styles.button}>Already a DC Holder ? Make or vote for a proposal &rarr;</button>
            </a>
          </Link>
        </div>
        {/* <div>
          <img className={styles.image} src="./yinyang.jpg" />
         </div> */}
      </main>
      <footer className={styles.footer}>
       <a href="https://twitter.com/NinjaWeb3"> Made by  ⛩️ NinjaDB ⛩️</a>
     </footer>
    </div>
    
  )


  // // walletConnected keep track of whether the user's wallet is connected or not
  // const [walletConnected, setWalletConnected] = useState(false);
  // // loading is set to true when we are waiting for a transaction to get mined
  // const [loading, setLoading] = useState(false);
  // // tokenIdsMinted keeps track of the number of tokenIds that have been minted
  // const [tokenIdsMinted, setTokenIdsMinted] = useState("0");
  // // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open
  // const web3ModalRef = useRef();

  // /**
  //  * publicMint: Mint an Daoism Challenge NFT
  //  */
  // const publicMint = async () => {
  //   try {
  //     // We need a Signer here since this is a 'write' transaction.
  //     const signer = await getProviderOrSigner(true);
  //     // Create a new instance of the Contract with a Signer, which allows
  //     // update methods
  //     const NFTContract = new Contract(
  //       NFT_CONTRACT_ADDRESS,
  //       abi,
  //       signer
  //     );
  //     // call the mint from the contract to mint the Daoism Challenge NFT
  //     const tx = await NFTContract.mint({
  //       // value signifies the cost of one DC which is "0.01" eth.
  //       // We are parsing `0.01` string to ether using the utils library from ethers.js
  //       value: utils.parseEther("0.01"),
  //     });
  //     setLoading(true);
  //     // wait for the transaction to get mined
  //     await tx.wait();
  //     setLoading(false);
  //     window.alert("You successfully minted a DAO NFT!");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // /*
  //     connectWallet: Connects the MetaMask wallet
  //   */
  // const connectWallet = async () => {
  //   try {
  //     // Get the provider from web3Modal, which in our case is MetaMask
  //     // When used for the first time, it prompts the user to connect their wallet
  //     await getProviderOrSigner();
  //     setWalletConnected(true);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };


  // /**
  //  * getTokenIdsMinted: gets the number of tokenIds that have been minted
  //  */
  // const getTokenIdsMinted = async () => {
  //   try {
  //     // Get the provider from web3Modal, which in our case is MetaMask
  //     // No need for the Signer here, as we are only reading state from the blockchain
  //     const provider = await getProviderOrSigner();
  //     // We connect to the Contract using a Provider, so we will only
  //     // have read-only access to the Contract
  //     const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, provider);
  //     // call the tokenIds from the contract
  //     const _tokenIds = await nftContract.tokenIds();
  //     //_tokenIds is a `Big Number`. We need to convert the Big Number to a string
  //     setTokenIdsMinted(_tokenIds.toString());
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // /**
  //  * Returns a Provider or Signer object representing the Ethereum RPC with or without the
  //  * signing capabilities of metamask attached
  //  *
  //  * A `Provider` is needed to interact with the blockchain - reading transactions, reading balances, reading state, etc.
  //  *
  //  * A `Signer` is a special type of Provider used in case a `write` transaction needs to be made to the blockchain, which involves the connected account
  //  * needing to make a digital signature to authorize the transaction being sent. Metamask exposes a Signer API to allow your website to
  //  * request signatures from the user using Signer functions.
  //  *
  //  * @param {*} needSigner - True if you need the signer, default false otherwise
  //  */
  // const getProviderOrSigner = async (needSigner = false) => {
  //   // Connect to Metamask
  //   // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
  //   const provider = await web3ModalRef.current.connect();
  //   const web3Provider = new providers.Web3Provider(provider);

  //   // If user is not connected to the Rinkeby network, let them know and throw an error
  //   const { chainId } = await web3Provider.getNetwork();
  //   if (chainId !== 4) {
  //     window.alert("Change the network to Rinkeby");
  //     throw new Error("Change network to Rinkeby");
  //   }

  //   if (needSigner) {
  //     const signer = web3Provider.getSigner();
  //     return signer;
  //   }
  //   return web3Provider;
  // };

  // // useEffects are used to react to changes in state of the website
  // // The array at the end of function call represents what state changes will trigger this effect
  // // In this case, whenever the value of `walletConnected` changes - this effect will be called
  // useEffect(() => {
  //   // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
  //   if (!walletConnected) {
  //     // Assign the Web3Modal class to the reference object by setting it's `current` value
  //     // The `current` value is persisted throughout as long as this page is open
  //     web3ModalRef.current = new Web3Modal({
  //       network: "rinkeby",
  //       providerOptions: {},
  //       disableInjectedProvider: false,
  //     });
  //     connectWallet();

  //     getTokenIdsMinted();

  //     // set an interval to get the number of token Ids minted every 5 seconds
  //     setInterval(async function () {
  //       await getTokenIdsMinted();
  //     }, 5 * 1000);
  //   }
  // }, [walletConnected]);

  // /*
  //     renderButton: Returns a button based on the state of the dapp
  //   */
  // const renderButton = () => {
  //   // If wallet is not connected, return a button which allows them to connect their wllet
  //   if (!walletConnected) {
  //     return (
  //       <button onClick={connectWallet} className={styles.button}>
  //         Connect your wallet
  //       </button>
  //     );
  //   }

  //   // If we are currently waiting for something, return a loading button
  //   if (loading) {
  //     return <button className={styles.button}>Loading...</button>;
  //   }

  //   if (walletConnected){
  //     return (
  //       <button className={styles.button} onClick={publicMint}>
  //         Mint Your DC NFT 🚀
  //       </button>
  //     );
  //     }
  // };

  // return (
  //   <div>
  //     <Head>
  //       <title>Daoism Challenge DAPP</title>
  //       <meta name="description" content="Daosim-DAO-Dapp" />
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>

  //     <div className={styles.main}>

  //       <div className={styles.parent}>
  //         <h1 className={styles.title}>Welcome to my Daoism Challenge!</h1>

  //         <div className={styles.description}>
  //           An NFT collection for my challenge for Daoism (please hire me 😄).
  //         </div>

  //         <div className={styles.description}>
  //           {tokenIdsMinted}/20 have been minted
  //         </div>
  //         <div className={styles.enfant}>
  //         {renderButton()}
  //         </div>

  //       </div>

  //       <div>
  //         <img className={styles.image} src="./cryptodevs/0.svg" />
  //       </div>
  //     </div>

  //     <footer className={styles.footer}>
  //       <a href="https://twitter.com/NinjaWeb3"> Made by  ⛩️ NinjaDB ⛩️</a>
  //     </footer>
  //   </div>
  // );
}