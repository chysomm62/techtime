import Button from "@/components/common/Button";
import { useState, FC } from "react";
import Courses from "./Courses";

import styles from "./PopularCourses.module.css";
import SubMenuTabs from "./SubMenuTabs";
import { CoursesSubMenuTabs, CoursesTabEnum } from "./tabs";

const courses = [
  {
    image: "/images/popularCourses/image1.png",
    category: "design",
    header: "introduction to user research in ux design",
    time: "23hrs 50mins",
    star: "4.7k",
    downloads: "(32.7k+)",
    userImg: "/images/popularCourses/user1.png",
    userName: "leonard victor",
    lessons: "15 lessons",
    amount: "$15.00",
  },
  {
    image: "/images/popularCourses/image2.png",
    category: "marketing",
    header: "introduction to  new marketing audience ",
    time: "22hrs 30mins",
    star: "4.7k",
    downloads: "(8.7k+)",
    userImg: "/images/popularCourses/user2.png",
    userName: "Jeffrey williams",
    lessons: "15 lessons",
    amount: "$32.00",
  },
  {
    image: "/images/popularCourses/image3.png",
    category: "development",
    header: "introduction to html, css & bootstrap",
    time: "45hrs 50mins",
    star: "4.7k",
    downloads: "(12.7k+)",
    userImg: "/images/popularCourses/user3.png",
    userName: "claretta mason",
    lessons: "55 lessons",
    amount: "$55.00",
  },
  {
    image: "/images/popularCourses/image4.png",
    category: "development",
    header: "introduction to javascript, git & GitHub",
    time: "30hrs 50mins",
    star: "4.7k",
    downloads: "(32.7k+)",
    userImg: "/images/popularCourses/user4.png",
    userName: "Jessica duke",
    lessons: "22 lessons",
    amount: "$45.00",
  },
  {
    image: "/images/popularCourses/image5.png",
    category: "marketing",
    header: "introduction to outroom  marketing analysis",
    time: "33hrs 50mins",
    star: "4.7k",
    downloads: "(4.7k+)",
    userImg: "/images/popularCourses/user5.png",
    userName: "Samuel jacobs",
    lessons: "26 lessons",
    amount: "$25.00",
  },
  {
    image: "/images/popularCourses/image6.png",
    category: "marketing",
    header: "introduction to live  marketing analysis",
    time: "10hrs 50mins",
    star: "4.7k",
    downloads: "(15.7k+)",
    userImg: "/images/popularCourses/user6.png",
    userName: "adam smith",
    lessons: "32 lessons",
    amount: "$25.00",
  },
];

interface coursesProp {
  coursesRef: any;
}

const PopularCourses: FC<coursesProp> = ({ coursesRef }) => {
  const [currentTab, setCurrentTab] = useState<CoursesTabEnum>(
    CoursesTabEnum.ALLCATEGORIES
  );

  const filterArray = (cat: string) => {
    return courses.filter(
      (el) => el.category.toLowerCase() === cat.toLowerCase()
    );
  };

  const getTabs = () => {
    switch (currentTab) {
      case CoursesTabEnum.ALLCATEGORIES:
        return <Courses courses={courses} />;
      case CoursesTabEnum.DESIGN:
        return <Courses courses={filterArray("design")} />;
      case CoursesTabEnum.DEVELOPMENT:
        return <Courses courses={filterArray("development")} />;
      case CoursesTabEnum.MARKETING:
        return <Courses courses={filterArray("marketing")} />;
      default:
        break;
    }
  };
  return (
    <section
      ref={coursesRef}
      className={`${styles.section} max-w-screen-xl mx-auto font-satoshi py-5 md:py-12 relative `}
    >
      <header className={`${styles.header} px-4`}>
        <h2 className="font-clash_display text-2xl md:text-[54px] text-blue-3 text-center capitalize font-bold leading-tight">
          browse our popular courses
        </h2>
        <p className="max-w-screen-md mx-auto py-1 md:py-5 block text-gray-2 font-medium text-[8px] leading-relaxed md:text-base text-center capitalize px-8">
          high-defination video is video of higher resolution and quality than
          standard definition. while there&#39;s no standard meaning for high
          definition, generally any standard video image
        </p>
      </header>
      <SubMenuTabs
        tabs={CoursesSubMenuTabs}
        currentTab={CoursesSubMenuTabs[currentTab]}
        setCurrentTab={setCurrentTab}
      />
      {getTabs()}
      <Button className="bg-blue-1 text-white mx-auto mt-4">
        view courses
      </Button>
    </section>
  );
};

export default PopularCourses;
