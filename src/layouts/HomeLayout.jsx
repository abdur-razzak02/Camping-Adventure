import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeLayout = () => {
  const loaction = useLocation();

  console.log(loaction.pathname);
  
  
  
  useEffect(() => {
    AOS.init();
    const pathToTitleMap = {
      "/": "Camping Adventure | Home",
      "/blog": "Blog | Camping Adventure",
      "/gallery": "Gallery | Camping Adventure",
      "/login": "Login | Camping Adventure",
      "/signup": "Signup | Camping Adventure",
      "/profile": "Profile | Camping Adventure",
      "/update-profile": "Update Profile",
    };
    const currentPath = loaction.pathname;
    document.title = pathToTitleMap[currentPath] || 'Camping Adventure'
    
  }, [loaction]);

  return (
    <div>
      <nav className="sticky top-0 z-50 bg-white">
        <Navbar></Navbar>
      </nav>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default HomeLayout;
