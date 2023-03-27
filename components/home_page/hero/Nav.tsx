import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/techtime.svg";
import { FaBars } from "react-icons/fa";
import { useState, FC } from "react";
import { useRouter } from "next/router";
import Button from "@/components/common/Button";

interface navProps {
  aboutRef: any;
  coursesRef: any;
  testimonialRef: any;
  communityRef: any;
}

const Nav: FC<navProps> = ({
  aboutRef,
  coursesRef,
  testimonialRef,
  communityRef,
}) => {
  const links = [
    { href: "/", label: "Home", active: true, reff: null },
    { href: "/", label: "About Us", active: false, reff: aboutRef },
    { href: "/", label: "Courses", active: false, reff: coursesRef },
    {
      href: "/",
      label: "Testimonial",
      active: false,
      reff: testimonialRef,
    },
    { href: "/", label: "Community", active: false, reff: communityRef },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = (ref: any) => {
    window.scrollTo({
      top: ref?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleClick = (reff: any) => {
    handleScroll(reff?.current);
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  const applyHandler = () => {
    router.push("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="font-satoshi max-w-screen-xl mx-auto flex justify-between items-center pl-0  h-20 pt-5">
      <Link href="/">
        <Image src={Logo} alt="techtime logo" />
      </Link>

      <div
        className={
          isOpen
            ? " fixed top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center justify-center flex-col lg:static lg:h-auto lg:flex-row lg:justify-between z-10 bg-blue-1"
            : "translate-y-screen lg:translate-y-0  fixed top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center justify-center flex-col lg:static lg:h-auto lg:flex-row lg:justify-between"
        }
      >
        <ul className="flex flex-col space-y-5 mb-16 lg:space-y-0 lg:flex-row lg:mb-0  lg:ml-10 lg:justify-end lg:items-center gap-6 lg:flex-1 text-center">
          {links.map((link, index) => (
            <li
              key={index}
              onClick={() => handleClick(link.reff)}
              className={
                link.active
                  ? "font-book text-white hover:text-gray-1 "
                  : "font-book text-gray-4 hover:text-gray-1"
              }
            >
              {link.label}
            </li>
          ))}
          <Button
            action={applyHandler}
            className="bg-white text-blue-1 rounded"
          >
            enroll now
          </Button>
        </ul>
      </div>

      <button className="relative z-10 lg:hidden" onClick={toggleMenu}>
        <FaBars color="#FFFFFF" fontSize="25px" />
      </button>
    </nav>
  );
};

export default Nav;
