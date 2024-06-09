import { useState } from 'react';
import Home from "./Home";
import Navbaru from "./NavbarUs";
import { Link as Linked } from "react-router-dom";
import { Link } from "react-scroll";
import Button from "../layout/Button";
import Footer  from "../components/Footer";
import  Spinner  from "../layout/Spinner";

const ContactUs = () => {
  const [loading] = useState(false);
  return (
    <div>
      {loading ? <Spinner /> : ''}
      <Navbaru />
      <div id="Home" className="my-12">
      <Home />
      </div>
      <div  id="ContactUs" className=" w-screen flex flex-col items-center justify-center mx-5 mt-10 mb-10 md:mx-1 bg-green-400">
        <h1 className="text-4xl font-bold mt-52 mb-10 hp:text-2xl  text-white ">
          AYO BERGABUNG BERSAMA KAMI
        </h1>
        <div className="flex justify-center gap-10 mb-52"><Link to="homee" spy={true} smooth={true} duration={500}>
          <Button title="Informasi PPDB" />
        </Link>
        <Linked to="https://www.kompas.com/#google_vignette" spy={true} smooth={true} duration={500}>
          <Button title="Pendaftaran Online" />
        </Linked></div>
      </div>
      <div id="Footer"> < Footer /></div>
    </div>
  );
};

export default ContactUs;