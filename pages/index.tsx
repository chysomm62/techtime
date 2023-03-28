import Head from "next/head";
import { useRef } from "react";
import {
  CommunityComponent,
  CompaniesComponent,
  FaqsComponent,
  FooterComponent,
  HeroComponent,
  PopularCoursesComponent,
  SpecsComponent,
  StandOutComponent,
  TestimonialComponent,
} from "@/components/home_page";
import { JsxElement } from "typescript";

export default function Techtime() {
  const aboutRef = useRef() as any;
  const coursesRef = useRef() as any;
  const testimonialRef = useRef() as any;
  const communityRef = useRef() as any;

  return (
    <>
      <Head>
        <title>Techtime</title>
        <meta name="description" content="techtime" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroComponent
          aboutRef={aboutRef}
          coursesRef={coursesRef}
          testimonialRef={testimonialRef}
          communityRef={communityRef}
        />
        <CompaniesComponent />
        <SpecsComponent />
        <StandOutComponent aboutRef={aboutRef} />
        <PopularCoursesComponent coursesRef={coursesRef} />
        <TestimonialComponent testimonialRef={testimonialRef} />
        <CommunityComponent communityRef={communityRef} />
        <FaqsComponent />
        <FooterComponent />
      </main>
    </>
  );
}
