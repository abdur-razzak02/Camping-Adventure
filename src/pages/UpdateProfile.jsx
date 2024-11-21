// UpdateProfile.js
import { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [name, setName] = useState(user.name);
  const [photoURL, setPhotoURL] = useState(user.photoURL);

  const handleUpdate = () => {
      updateUser({ name, photoURL });
      toast.success("Profile updated successfully!");
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-gray-700 mb-4 text-center">
            Update Profile
          </h2>
          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </div>
          <button
            onClick={handleUpdate}
            className="btn btn-primary w-full mt-5"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
