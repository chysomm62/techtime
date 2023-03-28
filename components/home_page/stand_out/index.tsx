import { FC } from "react";
import BoyImage from "@/public/images/stand_out_boy.png";
import Image from "next/image";

import styles from "./StandOut.module.css";
import { data } from "@/lib/variables/standOutData";

interface standOutProp {
  aboutRef: any;
}

const StandOut: FC<standOutProp> = ({ aboutRef }) => {
  return (
    <section
      ref={aboutRef}
      className={`font-satoshi px-5 bg-gray-7 max-w-full overflow-x-hidden ${styles.section}`}
    >
      <div className="max-w-screen-xl mx-auto lg:justify-between lg:items-center lg:flex py-5 lg:py-12 gap-0 lg:gap-10">
        <div
          className={` grow flex items-center justify-center lg:max-w-[50%] `}
        >
          <div>
            <h2
              className={`${styles.spec_header} text-center lg:text-left text-2xl font-bold mb-4 md:text-5xl capitalize font-clash_display text-blue-3 md:leading-tight tracking-wide`}
            >
              this is why we are best from others
            </h2>
            <p className="font-book md:font-medium mb-4 md:mb-6 text-center lg:text-left capitalize text-gray-2 text-xs md:text-base lg:max-w-[550px]">
              high-defination video is video of higher resolution and quality
              than standard definition. while there&#39;s no standard meaning
              for high definition, generally any standard video image
            </p>
            <div>
              <Image
                src={BoyImage}
                alt="A boy on a computer"
                className="mx-auto lg-mx-0"
              />
            </div>
          </div>
        </div>
        <div className=" grow lg:max-w-[50%] grid fold:grid-cols-1 grid-cols-2 gap-2 lg:gap-6 py-5 justify-items-start">
          {data.map((course, index) => (
            <div
              className=" gap-4 py-2 md:py-5 px-3 md:px-6 bg-white rounded md:rounded-lg"
              key={`${course.label} - ${index}`}
            >
              <div className="flex items-center justify-center relative w-8 md:w-12 h-8 md:h-12 mb-3 md:mb-6">
                <Image
                  src={course.icon}
                  alt={`${course.label} icon`}
                  fill
                  sizes="(max-width: 800px ) 32px, 48px"
                />
              </div>
              <h6 className="whitespace-nowrap capitalize text-blue-3 font-xs md:font-base font-bold">
                {course.label}
              </h6>
              <p className="text-[8px] md:text-xs text-gray-2 capitalize">
                {course.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandOut;
