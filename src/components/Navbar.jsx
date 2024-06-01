import { Link as Linked } from "react-router-dom";
import { Link } from "react-scroll";
import { Navbar, NavbarCollapse, NavbarToggle } from "flowbite-react";
import img from "../assets/images/logo.jpg";

function Component() {
  return (
    <Navbar
      fluid
      rounded
      className="flex flex-row justify-between p-5 md:px-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
    >
      <div>
        <Linked to="/" className=" flex flex-wrap font-semibold text-4xl xl:mr-96 cursor-pointer hp:mr-0">
          <img src={img} alt="" className=" w-16"/>
          <h1 className="text-3xl mt-4">TK Fajar Nusantara</h1>
               </Linked>
      </div>
      <NavbarToggle />
      <NavbarCollapse className="hp:text-center">
        <Link
          to="homee"
          className="hover:text-[#539165] p-1 transition-all cursor-pointer text-lg font-medium"
        >
          Home
        </Link>
        <Link
          to="pamflate"
          className="hover:text-[#539165] p-1 transition-all  cursor-pointer text-lg font-medium"
        >
          About
        </Link>
        <Linked
          to="/Ppdb"
          className=" bg-green-400 text-white hover:bg-white hover:text-black hover:outline-white transition-all  outline ml-6 py-1 px-6 rounded-full font-medium text-lg"
        >
          Ppdb
        </Linked>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Component;
