import { useState } from "react";
import Head from "next/head";
import Banner from "../components/banner";
import Template from "../components/template";

export default function Home() {
  const [click, setClick] = useState(false);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template click={click} setClick={setClick}>
        <Banner />
      </Template>
    </div>
  );
}
