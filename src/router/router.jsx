import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import PackageContainer from "../components/PackageContainer";
import Blog from "../pages/Blog";
import Gallery from "../pages/Gallery";
import CampDetails from "../pages/CampDetails";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <PackageContainer></PackageContainer>,
        loader: () => fetch("/campingPackagesData.json"),
      },
      {
        path: "/camp/:ID",
        element: (
          <PrivateRoute>
            <CampDetails></CampDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/campingPackagesData.json"),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "gallery",
        element: (
          <PrivateRoute>
            <Gallery></Gallery>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "profile",
    element: (
      <PrivateRoute>
        <Profile></Profile>
      </PrivateRoute>
    ),
  },
  {
    path: "update-profile",
    element: (
      <PrivateRoute>
        <UpdateProfile></UpdateProfile>
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default router;
