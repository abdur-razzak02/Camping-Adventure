import { useLoaderData } from "react-router-dom";
import Packages from "../pages/Packages";
import AboutCamp from "./AboutCamp";
import Slider from "./Slider";
import Accordion from "./Accordion";
import ContactUs from "./ContactUs";

const PackageContainer = () => {
  const packages = useLoaderData();

  return (
    <div>
      <Slider></Slider>
      <AboutCamp></AboutCamp>
      <main className=" bg-slate-100 py-10 lg:py-16" id="allPackages">
        <section className="w-11/12 mx-auto">
          <div className="text-center space-y-3 mb-10">
            <h1 className="text-4xl font-bold font-play ">Our All Packages</h1>
            <p className="sm:w-2/3 px-5 sm:px-0 mx-auto text-gray-500">
              Reconnect with nature through extraordinary camping adventures
              that take you to some of the most breathtaking locations on Earth.
              Discover unforgettable moments under the stars, embrace
              sustainable travel, and create lasting memories in the great
              outdoors.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8">
            {packages?.map((campPackage) => (
              <Packages
                key={campPackage.ID}
                allPackages={campPackage}
              ></Packages>
            ))}
          </div>
        </section>
      </main>
      <div className="bg-slate-100">
        <div className="grid sm:grid-cols-2 gap-10 xl:gap-20 w-11/12 mx-auto pb-10 xl:pb-16">
          <Accordion></Accordion>
          <ContactUs></ContactUs>
        </div>
      </div>
    </div>
  );
};

export default PackageContainer;
