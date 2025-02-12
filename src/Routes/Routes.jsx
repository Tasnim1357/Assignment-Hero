import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import Assignments from "../Pages/Assiignments/Assignments";
import UpdateAssignment from "../Pages/Update/UpdateAssignment";
import Details from "../Pages/Details/Details";
import MySubmitted from "../Pages/MySubmitted/MySubmitted";
import Pending from "../Pages/Pending/Pending";
import Private from "./Private/Private";
import Allsubmitted from "../Pages/Submitted/Allsubmitted";
import Errorpage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Errorpage></Errorpage>,
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
          element:<Private><CreateAssignment></CreateAssignment></Private>
        },
        {
          path:'/assignments',
          element:<Assignments></Assignments>
        },
        {
          path:'/update/:id',
          element:<UpdateAssignment></UpdateAssignment>,
          loader:({params})=> fetch(`https://assignment11-server-ten.vercel.app/assignments/${params.id}`)
        },
        {
          path:`/details/:id`,
          element:<Private><Details></Details></Private>,
          loader:({params})=> fetch(`https://assignment11-server-ten.vercel.app/assignments/${params.id}`)

        },
        {
          path: '/mysubmitted',
          element:<Private><MySubmitted></MySubmitted></Private>
        },
        {
          path:'/pending',
          element:<Private><Pending></Pending></Private>
        },
        {
          path:'/submitted',
          element:<Allsubmitted></Allsubmitted>
        }
        
        
      ]
    },
  ]);
  export default router;