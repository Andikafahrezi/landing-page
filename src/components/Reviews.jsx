import Heading from "../layout/Heading";
import ReviewCard from "../layout/ReviewCard";
import img1 from "../assets/images/pic1.png";
import img2 from "../assets/images/pic2.png";


const Reviews = () => {
  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">
      <Heading title1="Guru" title2="Kami" />

      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} para="Halo Anak-anak mari belajar berbudi pekerti yang baik!" position="Kepala Sekolah"/>
        <ReviewCard img={img1} para="Halo Anak-anak mari belajar berbudi pekerti yang baik!" position="Guru"/>
        <ReviewCard img={img1} para="Halo Anak-anak mari belajar berbudi pekerti yang baik!" position="Guru"/>
        <ReviewCard img={img2} para="Mari belajar dengan giat" position="Guru"/>
        
      </div>
    </div>
  );
};

export default Reviews;
