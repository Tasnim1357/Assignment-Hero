import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import Assignments from "../Pages/Assiignments/Assignments";
import UpdateAssignment from "../Pages/Update/UpdateAssignment";


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
        },
        {
          path:'/assignments',
          element:<Assignments></Assignments>
        },
        {
          path:'/update/:id',
          element:<UpdateAssignment></UpdateAssignment>,
          loader:({params})=> fetch(`http://localhost:5000/assignments/${params.id}`)
        }
        
        
      ]
    },
  ]);
  export default router;