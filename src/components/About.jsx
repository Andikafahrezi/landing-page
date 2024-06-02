import { useEffect } from "react";
import img from "../assets/images/logos.png";
import Heading from "../layout/Heading";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="5000"
      className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14"
    >
      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="w-full md:w-2/4 text-center space-y-2"
      >
        <Heading title1="Profile" title2="Sekolah" />
        <h2 className=" text-gray-600">TK Fajar Nusantara</h2>
        <p className=" text-lightText text-justify">
        TK Fajar Nusantara didirikan pada tahun 2005 dengan tujuan mulia untuk menghasilkan generasi penerus yang
         tidak hanya cerdas dan terampil tetapi juga memiliki akhlak islami yang kuat. TK Fajar Nusantara
          didirikan dari keinginan para pendidik dan orang tua untuk pendidikan anak usia dini 
          yang menyeluruh dan berbasis nilai-nilai islami. Baik kurikulum
           maupun fasilitas TK Fajar Nusantara terus berkembang. Kurikulum yang
            digunakan tidak hanya berfokus pada pendidikan formal, tetapi juga pada pe
            mbentukan karakter dan moral islami. Dengan program hafalan dan tafsir yang disesuaikan 
            dengan usia anak-anak, pembelajaran Al-Quran menjadi pilar utama
        </p>
      </div>
    </div>
  );
};

export default About;
