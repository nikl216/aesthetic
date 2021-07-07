import Head from "next/head";
import Banner from "../components/banner";
import Template from "../components/template";
import { banner1 } from "../components/data";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template>
        <Banner imgLeft={true} {...banner1} />
      </Template>
    </div>
  );
}
