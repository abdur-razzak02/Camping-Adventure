const AboutCamp = () => {
  return (
    <div className="bg-slate-100 sm:pt-10">
      <div className="grid sm:grid-cols-2 gap-10 lg:gap-20 w-11/12 sm:w-10/12 mx-auto py-10 ">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-3xl sm:text-4xl font-semibold font-play mb-3">
            About the Adventure Camp
          </h1>
          <p className="text-gray-500 mb-10">
            Escape to the great outdoors with unforgettable camping adventures!
            Discover stunning destinations, cozy campsites, and essential tips
            for your perfect getaway. Let nature be your ultimate retreat.
          </p>
          <div className="grid grid-cols-3 gap-5 w-full">
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://i.ibb.co.com/yBs600F/camping.png"
                alt="tents icon" className="lg:h-24 object-cover"
              />
              <p className="font-play font-semibold mt-2 lg:text-xl">Tents Rent</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://i.ibb.co.com/7vcvW58/hiking-1.png"
                alt="hiking icon" className="lg:h-24 object-cover"
              />
              <p className="font-play font-semibold mt-2 lg:text-xl">Activities</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://i.ibb.co.com/QC8CdS3/bonfire.png"
                alt="Firewoods icon" className="lg:h-24 object-cover"
              />
              <p className="font-play font-semibold mt-2 lg:text-xl">Firewoods</p>
            </div>
          </div>
        </div>

        <div className="text-5xl overflow-hidden rounded-xl">
          <img
            src="https://i.ibb.co.com/3z0LZjw/camping.jpg"
            alt="camp group"
            className="h-full w-full rounded-xl hover:scale-110 transition duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCamp;
