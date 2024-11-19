import { useState } from "react";
import Navbar from "../components/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = () => {
    // Add Google Login functionality here
    console.log("Login with Google");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login functionality here
    console.log("Login submitted");
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="text-5xl flex items-center justify-center bg-slate-100 min-h-[calc(100vh-64px)] py-10">
        <div className="card w-96 bg-base-100 shadow-xl p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered"
                              required          
              />
              <span
                className="absolute right-3 top-12 text-2xl cursor-pointer text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <button type="submit" className="btn bg-theme hover:bg-success text-white w-full">
              Login
            </button>
          </form>
          <div className="divider text-sm"> OR </div>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full"
          >
            Login with Google
          </button>
          <div className="text-center mt-4">
            <p className="text-sm">
              Don’t have an account?{" "}
              <Link to={'/signup'} className="text-primary link link-hover">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
