import { Routes, Route, Link as Linked} from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ImgSlider from "./components/ActiveSlider";
import Ppdb from "./components/Ppdb";
import ActiveSlider from "./components/ActiveSlider";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Menu />} />
      </Route>
      <Route path="/Menu" element={<Navbar />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Course" element={<Courses />} />
      <Route path="/Reviews" element={<Reviews />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Ppdb" element={<Ppdb />}  id="PPdb"/>
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Imgslider" element={<ImgSlider />} />
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};

export  function Menu() {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className="flex flex-row justify-between p-5 px-5 md:px-32 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <Link to="/Layout" className=" font-semibold text-2xl p-1 cursor-pointer">
            Addust
          </Link>
        </div>

        <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="courses"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Courses
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Reviews
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Contact
          </Link>

          <Linked
            to="/Ppdb"
            className=" bg-green-400 text-white hover:bg-white hover:text-black transition-all  outline cursor-pointer ml-10 py-1 px-6 rounded-full"
          >
            PPDB
          </Linked>
        </nav>
        <div className="flex md:hidden" onClick={handleChange}>
          <div className=" p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Layout () {

  return (
    <div>
      < Menu />
        <main>
          <div id="home">
            <Home />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="courses">
            <Courses />
          </div>

          <div id="reviews">
            <Reviews />
          </div>

          <div id="contact">
            <Contact />
          </div>

          <div id="activeslider">
            <ActiveSlider />
          </div>

        </main>

        <Footer/>
      </div>
  )
}

export default App;
