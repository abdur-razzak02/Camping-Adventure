import { useContext, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { user, setUser, loginUser, googleLogin,updateUserProfile, forgetPassword } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result);
        updateUserProfile({
          displayName: user.displayName,
          photoURL: user.photoURL
        })
        toast.success("Login out successfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => setErrorMessage(error.code));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        setUser(result);
        toast.success("Login out successfully");
        navigate(location.state ? location.state : "/");
        e.target.reset();
      })
      .catch((error) => {
        setErrorMessage(error.code);
      });
  };

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      setErrorMessage("Enter your email address");
    } else {
      forgetPassword(email)
        .then(() => {
          setErrorMessage("");
          toast.success("Check your email for reset password");
          setSuccess("Check your email for reset password");
        })
        .catch((error) => {
          setErrorMessage(error.code);
        });
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="text-5xl flex items-center justify-center bg-slate-100 min-h-[calc(100vh-64px)] py-10 px-5">
        <div className="card w-96 bg-base-100 shadow-xl p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                ref={emailRef}
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
                name="password"
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
                <a
                  onClick={handleForgotPassword}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>

            {errorMessage && (
              <p className="text-red-500 text-base text-center">
                {errorMessage}
              </p>
            )}
            {success && (
              <p className="text-green-500 text-base text-center">{success}</p>
            )}

            <button
              type="submit"
              className="btn bg-theme hover:bg-success text-white w-full"
            >
              Login
            </button>
          </form>
          <div className="divider text-sm"> OR </div>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline hover:bg-primary w-full"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/281/281764.png"
              alt="google icon"
              className="w-4"
            />
            Login with Google
          </button>
          <div className="text-center mt-4">
            <p className="text-sm">
              Don’t have an account?{" "}
              <Link to={"/signup"} className="text-primary link link-hover">
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
