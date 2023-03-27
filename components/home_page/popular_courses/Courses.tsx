import Image from "next/image";
import { FC } from "react";

interface CoursesProps {
  [x: string]: any;
  courses: course[];
}

interface course {
  image: string;
  category: string;
  header: string;
  time: string;
  star: string;
  downloads: string;
  userImg: string;
  userName: string;
  lessons: string;
  amount: string;
}

const Courses: FC<CoursesProps> = ({ courses }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3">
      {courses?.map((course: any, index: number) => (
        <div
          key={`${course.header} - ${index}`}
          className="rounded md:rounded-2xl bg-white py-4 px-2 md:px-5"
        >
          <div className="relative w-full h-auto min-w-[150px] md:min-w-[300px] min-h-[110px] md:min-h-[250px]">
            <Image src={course.image} alt={course.header} fill />
          </div>
          <div className="flex items-center justify-between my-2 md:my-4">
            <div className="bg-[#1E5DCE33] rounded md:rounded-2xl px-2 md:px-5  md:py-1 py-[2px]">
              <p className="text-blue-1 capitalize font-bold text-[4px] md:text-xs">
                {course.category}
              </p>
            </div>
            <div className="flex items-center gap-1 md:gap-2 text-gray-2">
              <p className="text-[4px] md:text-xs font-bold">{course.star}</p>
              <p className="text-[4px] md:text-xs font-bold">
                {course.downloads}
              </p>
            </div>
          </div>
          <h4 className="text-blue-3 font-clash_display font-semibold text-[8px] md:text-2xl capitalize">
            {course.header}
          </h4>
          <div className="flex items-center justify-between mt-1 md:mt-2 mb-2 md:mb-4">
            <div className="bg-[rgba(30, 93, 206, 0.2)] ">
              <p className="text-gray-2 text-[4px] md:text-base font-medium">
                {course.time}
              </p>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <p className="text-gray-2 text-[4px] md:text-base font-medium capitalize">
                {course.lessons}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 md:gap-2">
              <div className="relative w-4 md:w-10 h-4 md:h-10">
                <Image src={course.userImg} alt={course.userName} fill />
              </div>
              <h5 className="text-black font-bold text-[6px] md:text-base capitalize">
                {course.userName}
              </h5>
            </div>
            <p className="font-semibold text-blue-1 text-[8px] md:text-xl">
              {course.amount}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
