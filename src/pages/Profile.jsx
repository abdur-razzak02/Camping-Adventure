import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center h-[calc(100vh-64px)] bg-cover bg-center bg-profileBg">
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center mx-auto w-11/12 sm:w-3/4 xl:w-1/4 z-50">
          <Link to={"/"}>
            <FaArrowCircleLeft className="text-xl" />
          </Link>
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2"
          />
          <h2 className="text-lg font-bold text-gray-800 font-play">
            Welcome {user?.displayName}
          </h2>
          <p className="text-sm text-gray-600">Email: {user?.email}</p>
          <span
            className={`mt-2 inline-block px-3 py-1 rounded-full text-sm ${
              user?.emailVerified
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {user?.emailVerified ? "Email Verified" : "Email Not Verified"}
          </span>
          <p className="text-gray-500 mt-5">
            I am a passionate web developer with expertise in building
            responsive, user-friendly websites and web applications. I
            specialize in modern technologies like React, Tailwind CSS, and
            backend development, focusing on creating seamless user experiences.
          </p>
          <div className="mt-5">
            <Link
              to={"/update-profile"}
              className="py-2 px-5 rounded-md bg-gray-200 hover:bg-slate-300 transi duration-500"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
