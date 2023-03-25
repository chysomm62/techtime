import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/techtime.svg";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@/components/common/Button";

const Nav = () => {
  const links = [
    { href: "/", label: "Home", active: true },
    { href: "/about us", label: "About Us", active: false },
    { href: "/courses", label: "Courses", active: false },
    { href: "/testimonial", label: "Testimonial", active: false },
    { href: "/community", label: "Community", active: false },
  ];

  const router = useRouter();
  const applyHandler = () => {
    router.push("/auth/register");
  };
  const [isOpen, setIsOpen] = useState(false);
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
            ? " fixed top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center justify-center flex-col lg:static lg:h-auto lg:flex-row lg:justify-between z-10"
            : "translate-y-screen lg:translate-y-0  fixed top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center justify-center flex-col lg:static lg:h-auto lg:flex-row lg:justify-between"
        }
      >
        <ul className="flex flex-col space-y-5 mb-16 lg:space-y-0 lg:flex-row lg:mb-0  lg:ml-10 lg:justify-end lg:items-center gap-6 lg:flex-1">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                onClick={toggleMenu}
                className={
                  link.active
                    ? "font-book text-white hover:text-gray-1 "
                    : "font-book text-gray-4 hover:text-gray-1"
                }
              >
                {link.label}
              </Link>
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