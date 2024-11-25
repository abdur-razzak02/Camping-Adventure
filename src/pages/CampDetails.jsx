import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

const CampDetails = () => {
  const { ID } = useParams();
  const data = useLoaderData();

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTalkWithExpert = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    if (currentHour >= 10 && currentHour < 20) {
      window.open("https://meet.google.com/", "_blank");
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleConfirmBooking = () => {
    // const members = e.target.members.value; 
    // const days = e.target.days.value; 
    // const date = e.target.date.value; 
    // console.log(members, days, date);
    
    toggleModal();
    toast.success("Booking Confirmed");
  };

  const campPack = data.find((pack) => pack.ID == ID);
  const {
    adventureTitle,
    Image,
    categoryName,
    shortDescription,
    adventureCost,
    bookingAvailability,
    Location,
    Duration,
    adventureLevel,
    includedItems,
    ecoFriendly_Features,
    maxGroupSize,
    specialInstructions,
  } = campPack;

  return (
    <div className="min-h-[calc(100vh-308px)] bg-slate-100 py-10 lg:py-20">
      <div className="w-11/12 mx-auto grid sm:grid-cols-2 gap-5 sm:gap-10">
        <div className="space-y-1 lg:space-y-0">
          <img src={Image} alt="camp image" className="rounded-lg mb-3" />
          <p className="text-lg font-semibold font-play">
            Eco Friendly Features
          </p>
          <h2 className="grid lg:grid-cols-2 gap-x-3 mb-2">
            {ecoFriendly_Features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </h2>
          <p className="text-lg font-semibold font-play">
            Special Instructions
          </p>
          <h3 className="grid lg:grid-cols-2 gap-x-3">
            {specialInstructions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </h3>
        </div>

        <div className="space-y-1 sm:space-y-2">
          <h1 className="text-3xl font-semibold font-play">{adventureTitle}</h1>
          <p>Short description: {shortDescription}</p>
          <h2>
            Category: <b> {categoryName}</b>
          </h2>
          <h3>
            Adventure level: <b>{adventureLevel}</b>
          </h3>
          <h4>
            Duration: <b>{Duration}</b>
          </h4>
          <h5>
            Max size: <b>{maxGroupSize} person</b>
          </h5>
          <h6>
            Available:{" "}
            {bookingAvailability === "Yes" ? (
              <span className="px-8 py-1 bg-green-100 rounded-full border border-green-400 ml-2">
                Yes
              </span>
            ) : (
              <span className="px-8 py-1 bg-orange-100 rounded-full border border-orange-400 ml-2">
                No
              </span>
            )}
          </h6>
          <p>
            Cost: <b>{adventureCost}$</b>
          </p>
          <p className="text-lg font-semibold font-play">Included Item </p>
          <h1 className="">
            {includedItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </h1>
          <p>
            Location: <b>{Location}</b>
          </p>
          <div className="pt-5">
            <button
              onClick={handleTalkWithExpert}
              className="px-5 py-2 border border-theme transition duration-500 hover:bg-theme hover:text-white rounded-lg w-40"
            >
              Talk with Expert
            </button>
          </div>
        </div>
      </div>
      <div className="pt-10 xl:pt-16 w-full text-center">
        <button
          onClick={toggleModal}
          className="px-5 py-2 btn bg-orange-500 hover:bg-orange-400 text-white rounded-md w-48 transition duration-500"
        >
          Book Now
        </button>

        {/* Talk with expart Modal */}
        {isModalOpen && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Consultation Hours</h3>
              <p className="py-4">
                Consultation is available only <strong> 10:00 AM </strong> to
                <strong> 8:00 PM </strong>. Please try again during these hours.
              </p>
              <div className="modal-action">
                <button
                  onClick={closeModal}
                  className="btn bg-theme hover:bg-success text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Book now Modal */}
        {isOpen && (
          <div className="modal modal-open px-5">
            <div className="modal-box w-full max-w-md relative">
              {/* Close Icon */}
              <button
                onClick={toggleModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              >
                <AiOutlineClose size={20} />
              </button>

              <h3 className="font-bold text-lg mb-4">Book Your Stay</h3>


                {/* Members Input */}
              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text">Members</span>
                </label>
                <input
                  required
                  type="number"
                  name="members"
                  placeholder="Enter number of members"
                  className="input input-bordered"
                />
              </div>

              {/* Date Input */}
              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  required
                  type="date"
                  name="date"
                  className="input input-bordered"
                />
              </div>

              {/* Days of Stay Input */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Days of Stay</span>
                </label>
                <input
                  required
                  type="number"
                  name="days"
                  placeholder="Enter number of days"
                  className="input input-bordered"
                />
                </div>
                

              {/* Confirm Booking Button */}
              <div onClick={handleConfirmBooking} className="modal-action">
                <button
                  className="btn bg-theme hover:bg-success text-white w-full"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampDetails;
