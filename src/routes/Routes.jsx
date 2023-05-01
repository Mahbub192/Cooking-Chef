import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Home/Home/Home";
import LoginLayout from "../layout/LoginLayout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginLayout></LoginLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('http://localhost:5000/chef')
        }
      ]
    },
  ]);
  export default router