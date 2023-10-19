import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProducts from "../Pages/AddProducts/AddProducts";

// import PrivateContactRoute from "./PrivateContactRoute";
// import PrivateGalleryRoute from "./PrivateGalleryRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
         path:"/login",
         element:<Login></Login>
      },
      {
         path:"/register",
         element: <Register></Register>
      },

      {
        path: "/brand/:brandName",
        element: <BrandProducts/>
      },
      {
        path: "/addProducts",
        element: <AddProducts/>
      },
      //  {
      //     path:"/brandProducts",
      //     element: <<PrivateContactRoute><Contact></Contact></PrivateContactRoute>>
      //  },
      // {
      //    path:"/gallery",
      //    element: <PrivateGalleryRoute><Gallery></Gallery></PrivateGalleryRoute>
      // },
      // {
      //    path:"/about",
      //    element: <AboutUs></AboutUs>
      // }
    ]
  },
]);


export default router;