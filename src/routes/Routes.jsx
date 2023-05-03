import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Chefs from "../layout/Chefs";
import ChefInfo from "../pages/ChefInfo/ChefInfo";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/chef"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path:'category',
    element:<Chefs></Chefs>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:":id",
        element:<PrivateRoute><ChefInfo></ChefInfo></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/chef/${params.id}`)
      }
    ]
  }
]);
export default router;
