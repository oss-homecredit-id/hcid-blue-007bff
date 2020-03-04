import React from "react";
import Head from "next/head";

const Home = () => (
  <div>
    <Head>
      <title>Home Credit Indonesia - Powered by now.sh</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="title">Welcome to Next.js!</h1>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        line-height: 1.15;
        font-size: 48px;
        font-family: Arial;
      }
    `}</style>
  </div>
);

export default Home;
