import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import webImg from "../assets/english.svg";
import appImg from "../assets/math.svg";
import graphicImg from "../assets/art.svg";
import digitalImg from "../assets/hijaiyah.jpeg";

const Courses = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10 pb-10  bg-green-400">
      <Heading title1="Pelajaran" title2="Kami" />

      <div className=" flex flex-wrap justify-center gap-6 mt-6">
        <CoursesCard
          img={webImg}
          title="Bahasa Inggris"
          para="Belajar bahasa Inggris"
        />
        <CoursesCard
          img={appImg}
          title="Bahasa Kognitif"
          para="Belajar Mengenal Angka"
        />
        <CoursesCard img={graphicImg} title="Seni" para="Memicu Kreatifitas" />
        <CoursesCard
          img={digitalImg}
          title="Bahasa Arab"
          para="Mengenal Huruf Hijaiyah"
        />
      </div>
    </div>
  );
};

export default Courses;
