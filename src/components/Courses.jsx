import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import webImg from "../assets/web-dev.svg";
import appImg from "../assets/App-dev.svg";
import graphicImg from "../assets/graphic.svg";
import digitalImg from "../assets/digital.svg";

const Courses = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10 pb-10  bg-green-400">
      <Heading title1="Pelajaran" title2="Kami" />

      <div  className=" flex flex-wrap justify-center gap-6 mt-6">
        <CoursesCard
          img={webImg}
          title="Berbudi Pekerti"
          para="Belajar bersosialisasi"
        />
        <CoursesCard img={appImg} title="Menghitung" para="Belajar dasar-dasar perhitungan sederhana" />
        <CoursesCard img={graphicImg} title="Graphic Designer" />
        <CoursesCard img={digitalImg} title="Digital Marketing" />
      </div>
    </div>
  );
};

export default Courses;
