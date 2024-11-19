/* eslint-disable react/prop-types */
 
const Packages = ({ allPackages }) => {
  console.log(allPackages);
  const { adventureTitle, Image, ecoFriendly_Features } = allPackages;

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <div className="card bg-base-100 shadow-md">
        <figure className="px-5 pt-5">
          <img src={Image} alt="camp packege" className="rounded-lg h-40" />
        </figure>
        <div className="card-body px-5 pt-3 pb-5 gap-0">
          <h2 className="card-title mb-2">{adventureTitle}</h2>
          {ecoFriendly_Features.map((feature, index) => (
            <h1 key={index} className="text-theme">
              {feature}
            </h1>
          ))}
          <div className="card-actions mt-3">
            <button className="border border-theme py-1 px-4 rounded-md hover:bg-theme hover:text-white">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
