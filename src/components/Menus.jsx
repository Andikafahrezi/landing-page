import { Link as Linked } from "react-router-dom";
import { Link } from "react-scroll";
import { Navbar, NavbarCollapse, NavbarToggle } from "flowbite-react";

function Menus() {
  return (
    <Navbar
      fluid
      rounded
      className="flex flex-row justify-between p-5 md:px-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
    >
      <div>
        <Linked to="/" className="font-semibold text-2xl xl:mr-96 cursor-pointer hp:mr-0">
          Addust
        </Linked>
      </div>
      <NavbarToggle />
      <NavbarCollapse className="hp:text-center">
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
          About
        </Link>
        <Link
          to="courses"
          className="hover:text-[#539165] p-1 transition-all  cursor-pointer text-lg font-medium"
        >
          Courses
        </Link>
        <Link
          to="reviews"
          className="hover:text-[#539165] p-1 transition-all cursor-pointer text-lg font-medium"
        >
          Reviews
        </Link>
        <Link
          to="contact"
          className="hover:text-[#539165] p-1 transition-all  cursor-pointer text-lg font-medium"
        >
          Contact
        </Link>
        <Linked
          to="/Ppdb"
          className=" bg-green-400 text-white hover:bg-white hover:text-black transition-all  outline ml-6 py-1 px-6 rounded-full font-medium text-lg"
        >
          Ppdb
        </Linked>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Menus;