import { Link as Linked } from "react-router-dom";
import { Link } from "react-scroll";
import { Navbar, NavbarCollapse, NavbarToggle } from "flowbite-react";
import img from "../assets/images/logo.jpg";

function Menus() {
  return (
    <Navbar
      fluid
      rounded
      className="flex flex-row justify-between p-5 md:px-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
    >
      <div>
        <Linked to="/" className="flex flex-wrap font-semibold text-4xl lg:mr-20 cursor-pointer hp:mr-0">
        <img src={img} alt="" className=" w-12 rounded-full"/>
          <h1 className=" text-2xl mt-2">TK Fajar Nusantara</h1>
        </Linked>
      </div>
      <NavbarToggle />
      <NavbarCollapse className="hp:text-center sl:text-center">
        <Link
          to="home"
          className="hover:text-[#539165] p-1 transition-all cursor-pointer text-lg font-medium"
        >
          Home
        </Link>
        <Link
          to="about"
          className="hover:text-[#539165] p-1 transition-all  cursor-pointer text-lg font-medium"
        >
          Profile
        </Link>
        <Link
          to="courses"
          className="hover:text-[#539165] p-1 transition-all  cursor-pointer text-lg font-medium"
        >
          Course
        </Link>
        <Link
          to="reviews"
          className="hover:text-[#539165] p-1 transition-all cursor-pointer text-lg font-medium"
        >
          Teacher
        </Link>
        <Link
          to="contact"
          className="hover:text-[#539165] p-1 transition-all cursor-pointer text-lg font-medium"
        >
          Contact
        </Link>
        <Linked
          to="/Ppdb"
          className=" bg-green-400 text-white hover:bg-white hover:text-black transition-all   hover:outline-white ml-6 py-1 px-6 rounded-full font-medium text-lg sl:mx-32"
        >
          PPDB
        </Linked>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Menus;