import logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaUserPen,
  FaArrowRightFromBracket,
  FaTrash,
} from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, setUser, logoutUser, deleteAccount } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user?.photoURL);

  const handleLogout = () => {
    logoutUser();
    setUser(null);
  };

  const handleDeleteAccount = () => {
    deleteAccount().then(() => {
      setUser(null);
      navigate("/");
    });
  };

  return (
    <div className="navbar w-11/12 mx-auto p-0 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="mr-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={"/gallery"}>Gallery</NavLink>
            </li>
            <li>
              <details>
                <summary>More Adventure</summary>
                <ul className="p-2 w-48 space-y-1">
                  <li onClick={()=>toast.error('Not available now')}>
                    <Link>Mountain Treks</Link>
                  </li>
                  <li onClick={()=>toast.error('Not available now')}>
                    <Link>Ocean Dives</Link>
                  </li>
                  <li onClick={()=>toast.error('Not available now')}>
                    <Link>Wildlife Safaris</Link>
                  </li>
                  <li onClick={()=>toast.error('Not available now')}>
                    <Link>Forest Expeditions</Link>
                  </li>
                  <li onClick={()=>toast.error('Not available now')}>
                    <Link>River Adventures</Link>
                  </li>
                  <li onClick={()=>toast.error('Not available now')}>
                    <Link>Desert Exploration</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-10 mr-1 lg:mr-2" />
        </Link>
        <Link
          to={"/"}
          className="text-xl font-semibold hidden sm:inline font-play"
        >
          Camping Adventure
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
          <li>
            <NavLink to={"/gallery"}>Gallery</NavLink>
          </li>
          <li>
            <details>
              <summary>More Adventure</summary>
              <ul className="p-2 w-48 space-y-1">
                <li onClick={() => toast.error("Not available now")}>
                  <Link>Mountain Treks</Link>
                </li>
                <li onClick={() => toast.error("Not available now")}>
                  <Link>Ocean Dives</Link>
                </li>
                <li onClick={() => toast.error("Not available now")}>
                  <Link>Wildlife Safaris</Link>
                </li>
                <li onClick={() => toast.error("Not available now")}>
                  <Link>Forest Expeditions</Link>
                </li>
                <li onClick={() => toast.error("Not available now")}>
                  <Link>River Adventures</Link>
                </li>
                <li onClick={() => toast.error("Not available now")}>
                  <Link>Desert Exploration</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="dropdown dropdown-end navbar-end flex ">
        {user && <p>{user.email}</p>}
        {/* {user && user?.photoURL ? <img src={user.photoURL} alt="" /> : ''} */}
        {user ? (
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="user"
                src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
              />
            </div>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="px-4 py-1 rounded font-semibold bg-theme text-white"
          >
            Login
          </Link>
        )}

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content top-10 bg-base-100 rounded-lg space-y-1 z-[1] mt-3 w-44 p-2 shadow"
        >
          <li>
            <a>
              <FaUser /> Profile
            </a>
          </li>
          <li>
            <a>
              <FaUserPen /> Update Profile
            </a>
          </li>
          <li>
            <a>
              <IoSettingsSharp /> Settings
            </a>
          </li>
          <li onClick={handleDeleteAccount}>
            <a>
              <FaTrash></FaTrash> Delete Account
            </a>
          </li>
          <li onClick={handleLogout} className="text-red-600">
            <a>
              <FaArrowRightFromBracket /> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
