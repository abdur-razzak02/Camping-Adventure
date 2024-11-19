import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const HomeLayout = () => {
  return (
    <div>
      <nav className="sticky top-0 z-50 bg-white" data-aos="fade-down">
        <Navbar></Navbar>
      </nav>
      <main className="min-h-[calc(100vh-308px)] mb-10">
        <Slider></Slider>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
