import img from "../assets/images/utama.jpg";

const Home = () => {
  return (
    <div>
      <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
        <div data-aos="fade-right" data-aos-easing="linear"
      data-aos-duration="5000" className=" md:w-2/4 text-center">
          <h2 className=" text-5xl font-semibold leading-tight  hp:text-4xl">
            TK Fajar
            <span className="text-brightGreen"> Nusantara</span>
          </h2>
          <p className=" text-lightText mt-5 text-start">
            menjadi insan yang berahklak dan berbudi pekerti yang baik
          </p>
        </div>

        <div className=" w-full md:w-2/4" data-aos="fade-left" data-aos-easing="linear"
      data-aos-duration="5000">
          <img src={img} alt="img" className=" rounded-xl"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
