import {React, useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/download.svg'
import { AuthContext } from '../../Provider/AuthProvider';
import { ThemeContext } from '../../Root/Root';
const Navbar = () => {
  const {user,logOut}= useContext(AuthContext)
  const{handleTheme,theme}=useContext(ThemeContext)


  const handleThemeToggle = () => {
    handleTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleLogout=()=>{
    logOut()
    .then(()=> {})
    .catch(error => console.log(error))
  }
    const Navlinks=<>
    <li><Link to='/assignments' className='md:text-lg text-base font-semibold font-poppins'>Assignments</Link></li>
     {/* <li><Link to='/mysubmitted' className='text-lg font-semibold font-poppins'>My Submitted Assignments</Link></li> */}
     <li><Link to='/pending' className='md:text-lg text-base font-semibold font-poppins'>Pending Assignments</Link></li>
     
     <li><Link to='/create' className='md:text-lg text-base font-semibold font-poppins'>Create Assignment</Link></li>
    
     <li><Link to={`/submitted`}  className='sm:text-lg text-base font-semibold font-poppins'>Preview Assignments</Link></li>
   
     
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-40 bg-black max-w-[1592px]  mx-auto text-white dark:bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black ">
             {
                Navlinks
             }
             <li><Link to='/mysubmitted' className='text-lg font-semibold font-poppins'>My Attempted Assignments</Link></li>
             <li>
        
        <label className="cursor-pointer grid place-items-center ">
  <input type="checkbox"  checked={theme === 'dark'} // Checked state based on the current theme
        onChange={handleThemeToggle} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
 
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" ></path></svg>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
</label>
          </li>
             {
              user?   <li><Link to='/login' className="btn font-lato bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B] font-base text-xl" onClick={handleLogout} >Logout</Link></li>
              : <li className='text-lg font-semibold font-poppins btn btn-outline dark:text-white'><Link>Login</Link></li>


             }
             
              <li className='text-lg font-semibold font-poppins'><a className="btn bg-neutral-600 text-white hover:bg-emerald-950 ">Register</a></li>
            </ul>
          </div>
          <a className=" text-xl w-full "><img src={logo} alt="" className='h-[3.124rem] w-full' /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {
            Navlinks
           }
                <li>
        
        <label className="cursor-pointer grid place-items-center ">
  <input type="checkbox"  checked={theme === 'dark'} // Checked state based on the current theme
        onChange={handleThemeToggle} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
 
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" ></path></svg>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
</label>
          </li>
          </ul>
        </div>
        <div className="navbar-end lg:flex hidden">
        {
              user ?
              <details className="dropdown -mt-5">
  <summary className="m-1"> <img src={user.photoURL} alt="" className='w-[50px] h-[50px] rounded-full border-2 p-1 border-yellow-600'/></summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] text-black bg-base-100 rounded-box w-52">
  <li><Link to='/mysubmitted' className='text-lg font-semibold font-poppins'>My Attempted Assignments</Link></li>
    <li><Link to='/login' className="btn font-lato bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B] font-base text-xl" onClick={handleLogout} >Logout</Link></li>
  </ul>
</details>
               : <li className='list-none' ><Link className='text-lg font-semibold font-poppins btn btn-outline dark:text-white' to='/login'>Login</Link></li>
              
            }
        
          <Link to='/register' className="btn bg-neutral-600 text-lg font-semibold font-poppins text-white mx-2 hover:bg-emerald-950">Register</Link>
        </div>
      </div>
    );
};

export default Navbar;
