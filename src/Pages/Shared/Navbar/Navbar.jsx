import {React, useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/download.svg'
import { AuthContext } from '../../Provider/AuthProvider';

// import { FaShoppingCart } from "react-icons/fa";
// import useCart from '../../../Hooks/useCart';
const Navbar = () => {
  const {user,logOut}= useContext(AuthContext)

  const handleLogout=()=>{
    logOut()
    .then(()=> {})
    .catch(error => console.log(error))
  }
    const Navlinks=<>
    <li><Link to='/assignments' className='text-lg font-semibold font-poppins'>Assignments</Link></li>
     <li><Link to='/mysubmitted' className='text-lg font-semibold font-poppins'>My Submitted Assignments</Link></li>
     <li><Link to='/order/salad' className='text-lg font-semibold font-poppins'>Order Food</Link></li>
     
     <li><Link to='/secret' className='text-lg font-semibold font-poppins'>Secret</Link></li>
    
     <li><Link>Item 6</Link></li>
     {/* <li><Link>Item 6</Link></li> */}
     {/* <li><Link>Item 6</Link></li> */}
     {/* {
      user ? <>
   
      <li><button onClick={handleLogout} className="btn btn-ghost ml-8">LogOut</button></li>
      </> :<>
      <li><Link to='/login'>Login</Link></li>
      </>
     } */}
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-40 bg-black max-w-[1292px]  mx-auto    text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
             {
                Navlinks
             }
              <li className='text-lg font-semibold font-poppins'><Link>Login</Link></li>
              <li className='text-lg font-semibold font-poppins'><a className="btn bg-neutral-600 text-white ">Register</a></li>
            </ul>
          </div>
          <a className=" text-xl w-full "><img src={logo} alt="" className='h-[3.124rem] w-full' /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {
            Navlinks
           }
          </ul>
        </div>
        <div className="navbar-end lg:flex hidden">
        {
              user ? <div className="dropdown dropdown-hover mr-4  dark:text-white">
            <img src={user.photoURL} alt="" className='w-[50px] h-[50px] rounded-full border-2 p-1 border-yellow-600'/>
              <ul tabIndex={0} className="dropdown-content z-[10] menu p-2 dark:bg-black shadow bg-base-100 rounded-box w-52">
                <li><a>{user.displayName}</a></li>
                <li><Link to='/login' className="btn font-lato bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B] font-base text-xl" onClick={handleLogout} >Logout</Link></li>
              
              </ul>
            </div>: <li className='list-none' ><Link className='text-lg font-semibold font-poppins' to='/login'>Login</Link></li>
              
            }
        
          <Link to='/register' className="btn bg-neutral-600 text-lg font-semibold font-poppins text-white mx-2 ">Register</Link>
        </div>
      </div>
    );
};

export default Navbar;