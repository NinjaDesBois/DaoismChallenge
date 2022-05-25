import styles from "../styles/Home.module.css";
import Link from "next/link"
export default function Home() {

 return (
   
    <div className={styles.container}>
    <Link href="/"> 
      <a > <img className={styles.image} src="./daoism.png" alt="Home"/></a>
      </Link>
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
      </main>
      <footer className={styles.footer}>
       <a href="https://twitter.com/NinjaWeb3"> Made by  ⛩️ NinjaDB ⛩️</a>
     </footer>
    </div>
    
  )

}
