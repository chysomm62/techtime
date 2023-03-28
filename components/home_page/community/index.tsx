import { FC, useRef } from "react";
import MapImage from "@/public/images/people_map.png";
import Image from "next/image";

import Button from "@/components/common/Button";
interface communityProp {
  communityRef: any;
}

const clickHandler = () => {};

const Community: FC<communityProp> = ({ communityRef }) => {
  return (
    <section className="bg-blue-1 text-white" ref={communityRef}>
      <div className="max-w-screen-lg mx-auto font-satoshi py-5 md:py-12 relative before:content=[''] before:w-5 before:h-5 before:absolute before:right-0 before:top-5 md:before:top-14 before:rounded-full before:border-4 before:border-blue-1">
        <header className="px-3">
          <h5 className="uppercase text-[8px] md:text-base text-center font-bold">
            join our community
          </h5>
          <h2 className="leading-none tracking-wide font-clash_display text-2xl md:text-[54px] text-center ">
            Are you ready to connect with the future talent of the tech world{" "}
          </h2>
          <p className="py-1 md:py-5 block font-medium text-[8px] leading-relaxed md:text-base text-center capitalize px-8">
            meet up with other techstars and grow together
          </p>
        </header>
        <div className="max-w-screen-md mx-auto my-2 md:my-5">
          <Image
            priority={true}
            src={MapImage}
            alt="separate image of individuals smiling and laughing"
          />
        </div>
        <Button
          action={clickHandler}
          className="mx-auto bg-white text-blue-1 rounded"
        >
          join our community
        </Button>
      </div>
    </section>
  );
};

export default Community;
