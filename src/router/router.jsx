import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import PackageContainer from "../components/PackageContainer";
import Blog from "../pages/Blog";
import Gallery from "../pages/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <PackageContainer></PackageContainer>,
        loader: () => fetch("campingPackagesData.json"),
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
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
