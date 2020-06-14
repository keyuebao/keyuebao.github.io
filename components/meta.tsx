import React from "react";
import Head from "next/head";
import { NAME } from "../lib/constants";

const Meta: React.FC = () => {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon/favicon.png" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`Personal website of ${NAME}.`} />
    </Head>
  );
};

export default Meta;
