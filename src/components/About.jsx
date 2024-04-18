import { useEffect } from "react";
import img from "../assets/about.svg";
import Heading from "../layout/Heading";
import Aos from "aos";
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() =>{
    Aos.init()
  }, [])
  return (
    <div  data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="5000" className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>

      <div  data-aos="fade-up" data-aos-anchor-placement="top-center"className="w-full md:w-2/4 text-center space-y-2">
        <Heading title1="profile" title2="sekolah" />
        <p className=" text-lightText">
         adsdasdasdada
        </p>

        
      </div>
    </div>
  );
};

export default About;
