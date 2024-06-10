import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Pages/Provider/AuthProvider';
import Lottie from 'lottie-react';
import loader2 from '../../../public/Animation - 1718039484780.json'


const Private = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
   
    if(loading){
        return <div className='flex justify-center items-center h-screen'>
           <Lottie animationData={loader2} loop={true} style={{height:500}} />
        </div>
    }
    
    if(user){
        return children;
    }


   return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Private;