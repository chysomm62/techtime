import Image from "next/image";
import { FC } from "react";

const imageLinks = [
  "/images/companies/zoom.png",
  "/images/companies/stripe.png",
  "/images/companies/monday.png",
  "/images/companies/slack.png",
  "/images/companies/dropbox.png",
];

const Companies: FC = () => {
  return (
    <section className="bg-blue-2 text-white py-5 lg:py-16">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly">
        {imageLinks.map((image) => (
          <div className="relative w-14 h-4 lg:w-48 lg:h-10 ">
            <Image
              src={image}
              alt="company logo "
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
