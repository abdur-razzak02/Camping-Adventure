import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
      path: "/",
    element: <HomeLayout></HomeLayout>,
    
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
  ]);


export default router;