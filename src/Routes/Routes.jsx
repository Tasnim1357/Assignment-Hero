import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/create',
          element:<CreateAssignment></CreateAssignment>
        }
        
        
      ]
    },
  ]);
  export default router;