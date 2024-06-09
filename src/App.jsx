import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menus from "./components/NavbarMenu";
import Reviews from "./components/Reviews";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ImgSlider from "./components/ActiveSlider";
import Ppdb from "./components/Ppdb";
import ActiveSlider from "./components/ActiveSlider";
import ContactUs from "./components/ContactUs";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Menus />} />
      </Route>
      <Route path="/Menu" element={<Menus />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Course" element={<Courses />} />
      <Route path="/Reviews" element={<Reviews />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Ppdb" element={<Ppdb />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Imgslider" element={<ImgSlider />} />
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};

function Layout () {

  return (
    <div>
      < Menus />
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
