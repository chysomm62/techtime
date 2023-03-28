import { FC } from "react";
import Button from "@/components/common/Button";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/techtime.svg";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import { refTypes } from "@/lib/types/ref.types";

const UnAuthFooter: FC<refTypes> = ({
  homeRef,
  aboutRef,
  coursesRef,
  testimonialRef,
  communityRef,
}) => {
  const footerLinks1 = [
    { title: "Home", link: "/", reff: homeRef },
    {
      title: "About Us",
      link: "/",
      reff: aboutRef,
    },
    {
      title: "Our Courses",
      link: "/",
      reff: coursesRef,
    },
    {
      title: "Testimonials",
      link: "/",
      reff: testimonialRef,
    },
    { title: "Our Community", link: "/", reff: communityRef },
  ];

  const footerLinks2 = [
    {
      title: "Help Centers",
      link: "/",
    },
    {
      title: "Partners",
      link: "/",
    },
    {
      title: "Suggestion",
      link: "/",
    },
    { title: "Blog", link: "/" },
    { title: "Newsletter", link: "/" },
  ];

  const handleScroll = (ref: any) => {
    window.scrollTo({
      top: ref?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleClick = (reff: any) => {
    handleScroll(reff?.current);
  };

  return (
    <footer className="font-satoshi text-white font-book bg-blue-3 py-12 md:py-20 px-5 fold:px-2 max-w-full overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/">
              <Image src={Logo} alt="techtime logo" />
            </Link>
            <p className=" my-6 font-normal text-gray-1">
              Reach out to us on any of our social media networks
            </p>
            <div className="flex justify-start gap-4 lg:gap-6 mb-5">
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-3 text-3xl fold:text-2xl" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-3 text-3xl fold:text-2xl" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-gray-3 text-3xl fold:text-2xl" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-3 text-3xl fold:text-2xl" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="text-gray-3 text-3xl fold:text-2xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4 font-semibold text-2xl md:text-3xl font-clash_display">
              Useful Links
            </h4>
            <ul>
              {footerLinks1.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-base md:text-2xl font-normal mb-2 text-gray-1"
                  onClick={() => handleClick(item.reff)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4 font-semibold text-2xl md:text-3xl font-clash_display">
              Community
            </h4>
            {footerLinks2.map((item, index) => (
              <p
                key={index}
                className="text-base md:text-2xl font-normal mb-2 text-gray-1"
              >
                <Link href={item.link}>{item.title}</Link>
              </p>
            ))}
          </div>

          <div>
            <h4 className="text-white mb-4 font-semibold text-2xl md:text-3xl font-clash_display">
              Subscribe Us
            </h4>
            <div className="flex items-center max-w-full">
              <input
                type="email"
                className="bg-gray-3 border outline-none text-gray-1 border-blue-1 p-2 rounded-tl-sm rounded-bl-sm text-sm placeholder:text-gray-5"
                placeholder="Nft123@gmail.com"
              />
              <Button className="block bg-blue-1 text-white text-sm px-4 py-2 fold:px-2">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UnAuthFooter;
