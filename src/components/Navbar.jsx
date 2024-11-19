import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
                  <li>
                    <Link>Mountain Treks</Link>
                  </li>
                  <li>
                    <Link>Ocean Dives</Link>
                  </li>
                  <li>
                    <Link>Wildlife Safaris</Link>
                  </li>
                  <li>
                    <Link>Forest Expeditions</Link>
                  </li>
                  <li>
                    <Link>River Adventures</Link>
                  </li>
                  <li>
                    <Link>Desert Exploration</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <Link to={'/'}><img src={logo} alt="logo" className="w-10 mr-1" /></Link>
        <Link to={'/'} className="text-xl font-semibold hidden sm:inline font-play">Camping Adventure</Link>
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
                <li>
                  <Link>Mountain Treks</Link>
                </li>
                <li>
                  <Link>Ocean Dives</Link>
                </li>
                <li>
                  <Link>Wildlife Safaris</Link>
                </li>
                <li>
                  <Link>Forest Expeditions</Link>
                </li>
                <li>
                  <Link>River Adventures</Link>
                </li>
                <li>
                  <Link>Desert Exploration</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="dropdown dropdown-end navbar-end flex ">
      <h1 className="px-4 py-1 rounded mr-2 font-semibold bg-theme text-white">Logout</h1>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content top-10 bg-base-100 rounded-lg space-y-1 z-[1] mt-3 w-40 p-3 shadow"
        >
          <li>
            <a className="justify-between">Profile</a>
          </li>
          <li>
            <a className="justify-between">Update Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li className="text-red-600">
            <a>Logout</a>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
