import { testimonials } from "@/lib/variables/testimonials";
import { FC } from "react";
import Carousel from "./Carousel";

import styles from "./Testimonials.module.css";

interface TestimonialProp {
  testimonialRef: any;
}

const Testimonials: FC<TestimonialProp> = ({ testimonialRef }) => {
  return (
    <section
      ref={testimonialRef}
      className={`${styles.section} mx-auto max-w-screen-2xl font-satoshi py-5 md:py-12 relative `}
    >
      <header className={`${styles.header} px-4`}>
        <h2 className="font-clash_display text-2xl md:text-[54px] text-blue-3 text-center capitalize font-bold leading-tight">
          what our clients are saying
        </h2>
        <p className="max-w-screen-md mx-auto py-1 md:py-5 block text-gray-2 font-medium text-[8px] leading-relaxed md:text-base text-center capitalize px-8">
          high-defination video is video of higher resolution and quality than
          standard definition. while there&#39;s no standard meaning for high
          definition, generally any standard video image
        </p>
      </header>
      <Carousel testimonials={testimonials} />
    </section>
  );
};

export default Testimonials;
