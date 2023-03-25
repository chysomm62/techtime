import Head from "next/head";
import { FooterComponent, HeroComponent } from "@/components/home_page";

export default function Techtime() {
  return (
    <>
      <Head>
        <title>Techtime</title>
        <meta name="description" content="techtime" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroComponent />
        <FooterComponent />
      </main>
    </>
  );
}
