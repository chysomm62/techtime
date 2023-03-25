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

const UnAuthFooter = () => {
  const footerLinks1 = [
    { title: "Home", link: "/" },
    {
      title: "About Us",
      link: "/",
    },
    {
      title: "Our Courses",
      link: "/",
    },
    {
      title: "Testimonials",
      link: "/",
    },
    { title: "Our Community", link: "/" },
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

  return (
    <footer className="font-satoshi text-white font-book bg-blue-3 py-12 md:py-20 px-5">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/">
              <Image src={Logo} alt="techtime logo" />
            </Link>
            <p className=" my-6 font-normal text-gray-1">
              Reach out to us on any of our social media networks
            </p>
            <div className="flex justify-start space-x-7 mb-5">
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-3 text-3xl" />
              </a>

              <a href="" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-3 text-3xl" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-gray-3 text-3xl" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-3 text-3xl" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="text-gray-3 text-3xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4 font-semibold text-2xl md:text-3xl font-clash_display">
              Useful Links
            </h4>
            {footerLinks1.map((item, index) => (
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
            <div className="flex items-center">
              <input
                type="email"
                className="bg-gray-3 border outline-none text-gray-1 border-blue-1 p-2 rounded-tl-sm rounded-bl-sm text-sm placeholder:text-gray-5"
                placeholder="Nft123@gmail.com"
              />
              <Button className="block bg-blue-1 text-white text-sm px-4 py-2">
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
