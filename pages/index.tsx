import Head from "next/head";
import {
  CommunityComponent,
  CompaniesComponent,
  FaqsComponent,
  FooterComponent,
  HeroComponent,
  PopularCoursesComponent,
  SpecsComponent,
  StandOutComponent,
} from "@/components/home_page";

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
        <CompaniesComponent />
        <SpecsComponent />
        <StandOutComponent />
        <PopularCoursesComponent />
        <CommunityComponent />
        <FaqsComponent />
        <FooterComponent />
      </main>
    </>
  );
}
