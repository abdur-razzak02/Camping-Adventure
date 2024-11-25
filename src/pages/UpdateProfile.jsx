// UpdateProfile.js
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

const UpdateProfile = () => {
  const { setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    updateUserProfile({
      displayName,
      photoURL,
    })
      .then(() => {
        setUser((previous) => {
          return { ...previous, displayName, photoURL };
        });
        toast.success("Profile updated successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center h-[calc(100vh-64px)] bg-gray-100 px-5">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <Link to={"/"}>
            <FaArrowCircleLeft className="text-xl" />
          </Link>
          <h2 className="text-lg font-bold text-gray-700 mb-4 text-center font-play">
            Update Profile
          </h2>

          <form onSubmit={handleUpdate}>
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                type="text"
                name="name"
                // value={user.displayName}
                // onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                required
                type="text"
                name="photoURL"
                // value={user.photoURL}
                // onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <button className="btn btn-primary w-full mt-5">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
