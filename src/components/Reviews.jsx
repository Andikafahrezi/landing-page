import Heading from "../layout/Heading";
import ReviewCard from "../layout/ReviewCard";
import img1 from "../assets/images/tc1.jpg";
import img2 from "../assets/images/tc5.jpg";
import img3 from "../assets/images/tc6.jpg";


const Reviews = () => {
  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">
      <Heading title1="Guru" title2="Kami" />

      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} para="Halo Anak-anak mari belajar berbudi pekerti yang baik!" position="Kepala Sekolah"/>
        <ReviewCard img={img2} para="Halo Anak-anak mari belajar berbudi pekerti yang baik!" position="Guru"/>
        <ReviewCard img={img3} para="Halo Anak-anak mari belajar berbudi pekerti yang baik!" position="Guru"/>        
      </div>
    </div>
  );
};

export default Reviews;
