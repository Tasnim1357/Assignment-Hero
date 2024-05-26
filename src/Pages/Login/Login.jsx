import React, {  useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { AuthContext } from '../Provider/AuthProvider';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";

// import Lottie from 'lottie-react';
// import lot1 from   '../../../public/Animation - 1713676970388.json'
// import { Helmet } from 'react-helmet-async';
const Login = () => {
//   const {createLogin,goolgeLogin,githubLogin}=useContext(AuthContext)
  const [showPassword,setShowPassword]=useState(false)
// const location=useLocation()
// const navigate=useNavigate()
  const { register, handleSubmit, formState: { errors },reset } = useForm();
    const onSubmit = data =>{
        console.log(data)
        // const {Email,password}=data
        // createLogin(Email,password)
        // .then((result)=>{
        //     console.log(result.user)
        //     toast.success("User Logged in Successfully")
        //     navigate(location?.state? location.state:'/')
        //     reset()
        // })
        // .catch(error=>{
        //     console.log(error)
        //     toast.warn(error.message +'Give valid email and password')
         
        // })
      }

    //   const socialLogin=(social)=>{
    //     social()
    //     .then((result)=>{
    //         console.log(result.user)
    //         toast.success("User Logged in Successfully")
    //         navigate(location?.state? location.state:'/')
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //         toast.warn(error.message +'Give valid email and password')
    //     })
    //   }
    return (
   <div>
    {/* <Navbar></Navbar> */}
     <div className='flex justify-around md:flex-row flex-col gap-1 pt-10 px-1'>
         {/* <Helmet>
            <title>ArtRoof | Login</title>
          </Helmet> */}
      
    <div className='md:w-1/2 w-full  h-[80vh]'>
  
    <img src="https://i.ibb.co/jZcGXmc/data-security-concept-illustration-251005-467.jpg" className=' w-full h-full' alt="" />
    </div>
    <div className='md:w-1/2 w-full h-screen -mt-6'>
    <div className='flex justify-center items-center md:mt-16 mt-2'>
     <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-full h-[80vh] bg-green-100 dark:border-white border-2 md:p-8 p-2 space-y-3 grid grid-cols-1 rounded-2xl'>
      <h1 className='text-2xl font-bold text-[#151515] font-poppins  duration-500 hover:text-[#7061c0] text-center dark:text-white'>Please Login</h1>
          <div>
              <label htmlFor="" className='dark:text-white'>Email</label> <br />
              <input type="text" placeholder="Email"  className='w-full p-3 rounded-xl border-b-2 border-green-500 outline-none' {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} /> 
              {errors.Email && <p role="alert" className='text-red-600 text-lg '>Please Give valid Email</p>}
          </div>
          <div className='relative'>
                <label htmlFor="" className='dark:text-white'>Password</label> <br />
                <input 
                type={ showPassword ?"text" :"password" }
                placeholder="Password"  className='w-full p-3 rounded-xl border-b-2 border-green-500 outline-none' {...register('password', { 
          required: 'Password is required',
          minLength: {
            value:6 ,
            message: 'Password must be at least 6 characters long',
          },
          validate: {
            uppercase: value => /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter',
            lowercase: value => /[a-z]/.test(value) || 'Password must contain at least one lowercase letter'
          }
        })} />
        <span className='absolute top-[30%] transform -translate-x-8' onClick={()=>setShowPassword(!showPassword)}>
            {
                showPassword ? <FaRegEyeSlash className='text-2xl' /> : <FaRegEye className='text-2xl' />
            }
        </span>
        
               {errors.password && <p role="alert" className='text-red-600 text-lg'>{errors.password.message}</p>}
                </div>
      

      <input type="submit" value="Sign In"   className='btn btn-outline btn-accent w-full  sm:text-2xl text-balance font-poppins   text-[#2b2d30] duration-500  '/>
      <p className='dark:text-white'>Do not have an account?Please <Link to='/register' className='btn-link text-lg font-sora font-bold'>Register</Link></p>
    </form>
  
     </div>
     {/* <div className='border-2 p-3 rounded-3xl text-center w-full  md:w-full lg:w-1/2 mx-auto mt-4 border-gray-300 flex justify-center items-center space-x-4 duration-500 hover:bg-[#6e85d5] hover:border hover:border-green-600 cursor-pointer'>
     <FcGoogle className='text-2xl' />
      <h1 className='font-bold text-[#2F3D7E] font-sora text-center  text-sm sm:text-base dark:text-white ' onClick={()=>socialLogin(goolgeLogin)}>Continue With Google</h1>
     </div> */}
     {/* <div className='border-2 p-3 rounded-3xl text-center w-full md:w-full lg:w-1/2 mx-auto mt-4 border-gray-300 flex justify-center items-center space-x-4 text-sm sm:text-base duration-500  hover:bg-[#6e85d5] hover:border hover:border-green-600 cursor-pointer'>
     <FaGithub className='text-2xl dark:text-white ' />
      <h1 className='font-bold text-[#2F3D7E] font-sora text-center dark:text-white' onClick={()=>socialLogin(githubLogin)}>Continue With Github</h1>
     </div> */}
    </div>
  
  </div>
  {/* <Footer></Footer> */}
   </div>

    );
};

export default Login;