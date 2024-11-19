/* eslint-disable react/prop-types */

const Packages = ({ allPackages }) => {
  const { adventureTitle, Image, ecoFriendly_Features } = allPackages;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="card bg-base-100 rounded-xl h-full">
        <figure className="px-5 pt-5 overflow-hidden z-50">
          <div className="overflow-hidden rounded-lg">
            <img
              src={Image}
              alt="camp packege"
              className="object-cover rounded-lg sm:h-40 md:h-48 xl:h-56 hover:scale-110 transition duration-1000 ease-in-out"
            />
          </div>
        </figure>
        <div className="card-body px-5 pt-3 pb-5 gap-0">
          <h2 className="card-title mb-2 font-play">{adventureTitle}</h2>
          {ecoFriendly_Features.map((feature, index) => (
            <h1 key={index} className="text-theme">
              {feature}
            </h1>
          ))}
          <div className="card-actions mt-3">
            <button className="border border-theme py-1 px-4 rounded-md hover:bg-theme hover:text-white transition duration-300 ease-in-out">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
