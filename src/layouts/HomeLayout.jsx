import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <nav className="sticky top-0 z-50 bg-white">
        <Navbar></Navbar>
      </nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
