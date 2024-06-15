import { useState } from "react";
import Home from "./Home";
import Navbaru from "./Navbar";
import { Link as Linked } from "react-router-dom";
import { Link } from "react-scroll";
import Button from "../layout/Button";
import Footer from "../components/Footer";
import img from "../assets/images/ppdb.jpg";
import Spinner from "../layout/Spinner";

const Ppdb = () => {
  const [loading] = useState(false);
  return (
    <div>
      {loading ? <Spinner /> : ""}
      <Navbaru />
      <div id="homee" className="my-12">
        <Home />
      </div>
      <div
        className="flex justify-center"
        id="pamflate"
        data-aos="flip-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img src={img} alt="Ppdb" className=" w-96" />
      </div>
      <div
        id="contactu"
        className=" w-screen flex flex-col items-center justify-center mx-5 mt-10 mb-10 md:mx-1 bg-green-400"
      >
        <h1 className="text-4xl font-bold mt-8 mb-10 hp:text-2xl  text-white ">
          AYO BERGABUNG BERSAMA KAMI
        </h1>
        <div className="flex justify-center gap-10 mb-10">
          <Link to="homee" spy={true} smooth={true} duration={500}>
            <Button title="Informasi PPDB" />
          </Link>
          <Linked
            to="https://www.kompas.com/#google_vignette"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button title="Pendaftaran Online" />
          </Linked>
        </div>
      </div>
      <div id="Footer">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Ppdb;
