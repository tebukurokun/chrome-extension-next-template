import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Page from "../constants/page";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>extension demo</title>
      </Head>
      <div>Hello</div>
      <div>
        <Link href={Page().about}>
          <a>about this extension</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
