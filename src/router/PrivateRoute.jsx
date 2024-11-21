import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  
  const location = useLocation()
  console.log(location);

  if (loading) {
    return (
      <div className="flex justify-center items-center gap-1 min-h-[calc(100vh-355px)] bg-slate-100">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;
