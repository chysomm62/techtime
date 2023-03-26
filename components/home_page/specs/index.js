import Button from "@/components/common/Button";
import BoyImage from "@/public/images/spec_boy.png";
import GirlImage from "@/public/images/spec_girl.png";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./Specs.module.css";

const courses = [
  { label: "audio classes", icon: "/icons/courses/icon1.svg" },
  { label: "live classes", icon: "/icons/courses/icon2.svg" },
  { label: "recorded classes", icon: "/icons/courses/icon3.svg" },
  { label: "50+ notes", icon: "/icons/courses/icon4.svg" },
];

const Specs = () => {
  const router = useRouter();
  const applyHandler = () => {
    router.push("/");
  };

  return (
    <section
      className={`font-satoshi px-5  bg-gray-7 max-w-full overflow-x-hidden ${styles.section}`}
    >
      <div className="max-w-screen-xl mx-auto md:justify-between md:items-center md:flex pt-10 pb-4 md-pb-8 gap-0 md:gap-5">
        <div
          className={` grow flex items-center justify-center  md:max-w-[50%] `}
        >
          <div>
            <h2
              className={`${styles.spec_header} text-center md:text-left text-2xl font-bold mb-4 md:text-5xl lg:leading-tight font-clash_display text-blue-3 md:leading-tight tracking-tight`}
            >
              High quality video, audio & live classes
            </h2>
            <p className="font-book md:font-medium mb-4 md:mb-6 text-center md:text-left capitalize text-gray-2 text-xs md:text-base md:max-w-[550px]">
              high-defination video is video of higher resolution and quality
              than standard definition. while there&#39;s no standard meaning
              for high definition, generally any standard video image
            </p>
            <Button
              action={applyHandler}
              className="mx-auto md:mx-0 text-white text-left bg-blue-1 font-medium rounded border"
            >
              view courses
            </Button>
            <div className="grid grid-cols-2 gap-6 py-3 md:py-5 justify-items-start  max-w-fit">
              {courses.map((course) => (
                <div className="flex items-center gap-4 py-2 md:py-5 px-4 md:px-6 w-52 last:ml-5">
                  <div className="flex items-center justify-center relative w-3">
                    <Image
                      src={course.icon}
                      alt={`${course.label} icon`}
                      fill
                    />
                  </div>
                  <h6 className="whitespace-nowrap capitalize">
                    {course.label}
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`${styles.images}   grow md:ml-[-8rem]`}>
          <box className={`${styles.boy_image}`}>
            <Image priority={true} src={BoyImage} alt="Boy studying" />
          </box>
          <box className={`${styles.girl_image}`}>
            <Image priority={true} src={GirlImage} alt="girl studying" />
          </box>
        </div>
      </div>
    </section>
  );
};

export default Specs;
