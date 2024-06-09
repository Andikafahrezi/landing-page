import Button from "../layout/Button";
import { Link as Linked } from "react-router-dom";


const Contact = () => {
  return (
    <div className=" w-screen flex flex-col items-center justify-center  mt-10 md:mx-1 bg-green-400">
      <h1 className="text-4xl font-bold mt-8 mb-10 hp:text-3xl  text-white ">Ada pertanyaan hubungi kami</h1>
      <Linked to="ContactUs" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Linked>
        <h2 className=" font-medium text-lg mt-12 text-white">JL Bambu Apus I</h2>
        <h4 className=" font-thin mt-1 mb-12 text-white">Jam operasional senin - sabtu</h4>
      
      </div>
  );
};

export default Contact;
