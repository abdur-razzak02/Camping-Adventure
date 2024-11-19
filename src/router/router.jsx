import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import PackageContainer from "../components/PackageContainer";
import Blog from "../pages/Blog";
import Gallery from "../pages/Gallery";
import CampDetails from "../pages/CampDetails";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

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
        element: <CampDetails></CampDetails>,
        loader: () => fetch("/campingPackagesData.json"),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "gallery",
        element: <Gallery></Gallery>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
