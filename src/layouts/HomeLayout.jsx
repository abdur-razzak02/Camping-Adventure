import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Packages from "../pages/Packages";

const HomeLayout = () => {
    const [packages, setPackages] = useState();

    useEffect(() => {
        fetch('/campingPackagesData.json')
            .then((res) => res.json())
            .then(data => {
                setPackages(data)
            })
    }, [])
    console.log(packages);
    
  return (
    <div>
      <nav className="sticky top-0 z-50 bg-white" data-aos="fade-down">
        <Navbar></Navbar>
      </nav>
      <main className="min-h-[calc(100vh-308px)] pb-10 space-y-10 bg-base-200">
              <Slider></Slider>
              <div className="w-11/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {
                  packages?.map(campPackage => <Packages key={campPackage.ID} allPackages={campPackage}></Packages>)
              }
              </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
