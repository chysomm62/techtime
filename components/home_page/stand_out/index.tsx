import BoyImage from "@/public/images/stand_out_boy.png";
import GirlImage from "@/public/images/spec_girl.png";
import Image from "next/image";

import styles from "./StandOut.module.css";

const data = [
  {
    label: "experienced mentors",
    text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    icon: "/icons/stand_outs/icon1.svg",
  },
  {
    label: "one-on-one meetings",
    text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    icon: "/icons/stand_outs/icon2.svg",
  },
  {
    label: "one-on-one meetings",
    text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    icon: "/icons/stand_outs/icon3.svg",
  },
  {
    label: "affordable prices",
    text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    icon: "/icons/stand_outs/icon4.svg",
  },
];

const StandOut = () => {
  return (
    <section
      className={`font-satoshi px-5 bg-gray-7 max-w-full overflow-x-hidden ${styles.section}`}
    >
      <div className="max-w-screen-xl mx-auto md:justify-between md:items-center md:flex py-5 md:py-12 gap-0 md:gap-10">
        <div
          className={` grow flex items-center justify-center md:max-w-[50%] `}
        >
          <div>
            <h2
              className={`${styles.spec_header} text-center md:text-left text-2xl font-bold mb-4 md:text-5xl lg:leading-tight capitalize font-clash_display text-blue-3 md:leading-tight tracking-wide`}
            >
              this is why we are best from others
            </h2>
            <p className="font-book md:font-medium mb-4 md:mb-6 text-center md:text-left capitalize text-gray-2 text-xs md:text-base md:max-w-[550px]">
              high-defination video is video of higher resolution and quality
              than standard definition. while there&#39;s no standard meaning
              for high definition, generally any standard video image
            </p>
            <div>
              <Image src={BoyImage} alt="A boy on a computer" />
            </div>
          </div>
        </div>
        <div className=" grow flex md:max-w-[50%] grid grid-cols-2 gap-6 py-3 md:py-5 justify-items-start">
          {data.map((course) => (
            <div className=" gap-4 py-2 md:py-5 px-4 md:px-6 bg-white rounded md:rounded-lg">
              <div className="flex items-center justify-center relative w-8 md:w-12 h-8 md:h-12 mb-3 md:mb-6">
                <Image src={course.icon} alt={`${course.label} icon`} fill />
              </div>
              <h6 className="whitespace-nowrap capitalize text-blue-3 font-xs md:font-base font-bold">
                {course.label}
              </h6>
              <p className="font-[8px] md:font-xs text-gray-2 capitalize">
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
