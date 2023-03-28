import Button from "@/components/common/Button";
import { courses } from "@/lib/variables/popular-courses";
import { useState, FC } from "react";
import Courses from "./Courses";

import styles from "./PopularCourses.module.css";
import SubMenuTabs from "./SubMenuTabs";
import { CoursesSubMenuTabs, CoursesTabEnum } from "./tabs";

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
