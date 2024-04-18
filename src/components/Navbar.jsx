import {Link as Linked} from "react-router-dom";
import { Link } from "react-scroll";

import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

function Component() {
  return (
    <Navbar fluid rounded className=" px-5 py-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <span><Linked to="/Layout"  className=" font-semibold text-2xl p-1 cursor-pointer mr-12 px-32">Services</Linked></span>
      <NavbarToggle />
      <NavbarCollapse className="">
        <Link to="reviews" className="hover:text-[#539165] transition-all cursor-pointer text-lg font-medium p-1">
          Home
        </Link>
        <NavbarLink  href="#" className="hover:text-[#539165] transition-all cursor-pointer text-lg font-medium p-1">
          About
        </NavbarLink>
        <NavbarLink href="#" className="hover:text-[#539165] transition-all cursor-pointer text-lg font-medium p-1">Services</NavbarLink>
        <NavbarLink href="#" className="hover:text-[#539165] transition-all cursor-pointer text-lg font-medium p-1">Pricing</NavbarLink>
        <NavbarLink href="#"  className=" bg-green-400 text-white hover:bg-white hover:text-black transition-all  outline ml-6 py-1 px-60 rounded-full font-medium text-lg">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Component;
