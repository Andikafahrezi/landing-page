import Button from "../layout/Button";
import { Link as Linked } from "react-router-dom";


const Contact = () => {
  return (
    <div className=" w-screen flex flex-col items-center justify-center  mt-10 md:mx-1 bg-green-400">
      <h1 className="text-4xl font-bold mt-8 mb-10 hp:text-3xl  text-white ">Ada pertanyaan? Hubungi kami !</h1>
      <Linked to="ContactUs" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Linked>
        <h2 className=" font-medium text-lg mt-12 text-white hp:text-base hp:text-center">JL Lele Raya, No. 89, Bambu Apus Pamulang, Bambu Apus, Tangerang, Kota Tangerang Selatan, Banten 15415</h2>
        <h4 className=" font-thin mt-1 mb-12 text-white">Jam operasional : senin - jumat 07.00–13.30</h4>
      
      </div>
  );
};

export default Contact;
