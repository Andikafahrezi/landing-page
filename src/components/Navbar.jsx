import {Link as Linked} from "react-router-dom";
import { Link } from "react-scroll";
import {
  Navbar,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";

function Component() {
  return (
    <Navbar fluid rounded className=" px-5 py-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <span><Linked to="/"  className=" font-semibold text-2xl p-1 cursor-pointer mr-12 px-32">Addust</Linked></span>
      <NavbarToggle />
      <NavbarCollapse className="hp:text-center">
        <Link to="homee" className="hover:text-[#539165] transition-all cursor-pointer text-lg font-medium">
        Home
        </Link>
        <Link  to="pamflate" className="hover:text-[#539165] transition-all cursor-pointer text-lg font-medium">
          About
        </Link>
        <Link to="contactu" className="hover:text-[#539165] transition-all cursor-pointer text-lg font-medium">Contact</Link>
        <Linked to="/Ppdb"  className=" bg-green-400 text-white hover:bg-white hover:text-black transition-all  outline ml-6 py-1 px-6 rounded-full font-medium text-lg">Ppdb</Linked>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Component;
