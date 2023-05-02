import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Chefs from "../layout/Chefs";
import ChefInfo from "../pages/ChefInfo/ChefInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
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
    children:[
      {
        path:":id",
        element:<ChefInfo></ChefInfo>,
        loader: ({params})=> fetch(`http://localhost:5000/chef/${params.id}`)
      }
    ]
  }
]);
export default router;
