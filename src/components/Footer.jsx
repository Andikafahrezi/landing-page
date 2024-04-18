// import { Link } from "react-scroll";

// const Footer = () => {
//   return (
//     <div>
//       <div className=" flex flex-col md:flex-row justify-between bg-white border-2 border-lightText rounded-lg md:px-32 p-5">
//         <div className="flex flex-col md:flex-row gap-5 font-medium p-1 text-lg">
//           <Link
//             to="home"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-[#539165] transition-all cursor-pointer"
//           >
//             Home
//           </Link>
//           <Link
//             to="about"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-[#539165] transition-all cursor-pointer"
//           >
//             About
//           </Link>
//           <Link
//             to="courses"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-[#539165] transition-all cursor-pointer"
//           >
//             Courses
//           </Link>
//           <Link
//             to="reviews"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-[#539165] transition-all cursor-pointer"
//           >
//             Reviews
//           </Link>
//           <Link
//             to="contact"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-[#539165] transition-all cursor-pointer"
//           >
//             Contact
//           </Link>
//         </div>

//         <div className=" mt-4 md:mt-0">
//           <Link to="/" className=" font-semibold text-2xl p-1 cursor-pointer">
//             eStudy
//           </Link>
//         </div>
//       </div>

//       <div className=" text-center mt-4">
//         <p>
//           @copyright developed by
//           <span className="text-brightGreen px-2">champion programmers</span>|
//           All rights reserved
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import img from "../assets/contact.svg";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Ppdb from "./Ppdb";

function Component() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="https://flowbite.com"
              src={img}
              alt="Addust Logo"
              name="Addust Corp"
            />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="about" />
              <FooterLinkGroup col>
                <FooterLink href="#">Slowbit</FooterLink>
                <FooterLink href="#">Tailwind CSS</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink href="#">Github</FooterLink>
                <FooterLink href="#">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="https://www.blogger.com/blog/posts/3148134110361972908">Privacy Policy</FooterLink>
                <FooterLink href={< Ppdb />}>Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Addust™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Component;
