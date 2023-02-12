import Head from "next/head";
import { Content } from "../lib/constants";
import {Container, Slider, HomeHero, Featured, CallToAction, ProductsSection, NewsSection } from '../components';


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
      {/* <section className="bg-white py-[100px]">
        <Container>
          <h2 className="section-title"> An Intoduction</h2>
        </Container>
      </section> */}
      <ProductsSection />
      <Featured />
      <Slider />
      <CallToAction />
      <NewsSection />

    </>
  );
}
