import { FC } from "react";
import Button from "@/components/common/Button";
import HeroImage from "@/public/images/hero/hero.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "./Hero.module.css";
import Nav from "./Nav";

const users = [
  "/images/hero/user1.png",
  "/images/hero/user2.png",
  "/images/hero/user3.png",
  "/images/hero/user4.png",
  "/images/hero/user5.png",
];

interface heroProps {
  aboutRef: any;
  coursesRef: any;
  testimonialRef: any;
  communityRef: any;
}

const Hero: FC<heroProps> = ({
  aboutRef,
  coursesRef,
  testimonialRef,
  communityRef,
}) => {
  const router = useRouter();
  const applyHandler = () => {
    router.push("/");
  };

  return (
    <header
      className={`font-satoshi px-5 text-gray-1   bg-blue-1 ${styles.hero}`}
    >
      <Nav
        aboutRef={aboutRef}
        coursesRef={coursesRef}
        testimonialRef={testimonialRef}
        communityRef={communityRef}
      />
      <div className="max-w-screen-xl mx-auto lg:justify-between lg:items-center lg:flex pt-10 ">
        <div
          className={`mb-10 lg:mb-20 lg:max-w-lg self-stretch grow flex items-center justify-center ${styles.hero_text}`}
        >
          <div>
            <h1 className="text-center lg:text-left text-3xl font-xtrabold mb-4 md:text-[64px] lg:text-5xl lg:leading-tight lg:tracking-tight  font-clash_display text-white md:leading-tight tracking-widest">
              Grow your skills to advance your career path
            </h1>
            <p className="font-book mb:1 md:mb-10 text-center lg:text-left capitalize">
              build your future with our quality education. the best and largest
              all-in-one online tutoring platform in the world
            </p>
            <div className="flex items-center gap-2 justify-center lg:justify-start my-4">
              <Button
                action={applyHandler}
                className="text-white text-left  font-medium rounded border"
              >
                get started now <FiArrowUpRight />
              </Button>
              <Button
                action={applyHandler}
                className="bg-white text-blue-1 rounded"
              >
                enroll now
              </Button>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              {users.map((user) => (
                <div className="relative ml-[-18px] first:ml-0 w-8 h-8 md:ml-[-36px] md:w-16 md:h-16 ">
                  <Image src={user} alt="image of user " fill />
                </div>
              ))}
              <div>
                <p className="font-clash_display font-2xl capitalize font-bold leading-tight">
                  255k+
                  <span className="font-satoshi block font-base font-medium">
                    previews
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.hero_image}  lg:max-w-[50%] grow`}>
          <Image
            priority={true}
            src={HeroImage}
            alt="separate image of individuals smiling and laughing"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
