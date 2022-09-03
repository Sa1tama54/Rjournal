import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";
import Post from "../components/Post";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="main">
        <div className="leftSide">
          <LeftMenu />
        </div>
        <div className="content">
          <Post />
        </div>
        <div className="rightSide"></div>
      </div>
    </div>
  );
};

export default Home;
