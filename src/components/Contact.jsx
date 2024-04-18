import Button from "../layout/Button";
import { Link } from "react-scroll";


const Contact = () => {
  return (
    <div className=" w-screen flex flex-col items-center justify-center mx-5 mt-10 md:mx-1 bg-green-400">
      <h1 className="text-4xl font-bold mt-8 mb-10 hp:text-3xl  text-white ">Ada pertnyaan hubungi kami</h1>
      <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
        <h2 className=" font-medium text-lg mt-12 text-white">JL memksneni.adndnandnandlan 223 jndDnldnla</h2>
        <h4 className=" font-thin mt-1 mb-12 text-white">Jam operasional senin - sabtu</h4>
      
      </div>
  );
};

export default Contact;
