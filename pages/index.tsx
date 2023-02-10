import Head from "next/head";
import { Content } from "../lib/constants";
import {Slider, HomeHero, Featured, CallToAction, ProductsSection, News } from '../components';


export default function Home() {

  return (
    <>
      <Head>
        <title>{`${Content.brandName} Website`} </title>
        <meta name="description" content={Content.aboutShort} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeHero />
      <ProductsSection />
      <Featured />
      <Slider />
      <CallToAction />
      <News />

    </>
  );
}
