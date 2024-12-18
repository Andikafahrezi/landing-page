import { useState } from 'react';
import Home from "./Home";
import Navbaru from "./NavbarUs";
import { Link as Linked } from "react-router-dom";
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
      <div  id="ContactUs" className=" w-screen flex flex-col text-center mt-10 mb-10 md:mx-1 bg-green-400">
        <h1 className="text-4xl font-bold mt-52 mb-10 hp:text-2xl  text-white ">
          AYO BERGABUNG BERSAMA KAMI
        </h1>
        <div className="flex justify-center gap-10 mb-52"><Linked to="https://api.whatsapp.com/send?phone=6281398485545&text=Saya%20ingin%20mengetahui%20tentang%20pendaftaran%20ini." spy={true} smooth={true} duration={500}>
          <Button title="Informasi PPDB" />
        </Linked>
        <Linked to="https://api.whatsapp.com/send?phone=6285772081594&text=Saya%20ingin%20mengetahui%20tentang%20pendaftaran%20ini." spy={true} smooth={true} duration={500}>
          <Button title="Pendaftaran Online" />
        </Linked></div>
      </div>
      <div id="Footer"> < Footer /></div>
    </div>
  );
};

export default ContactUs;