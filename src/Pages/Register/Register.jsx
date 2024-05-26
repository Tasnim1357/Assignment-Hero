import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { AuthContext } from './../Provider/AuthProvider';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
// import { Helmet } from 'react-helmet-async';
const Register = () => {
// const {createUser,profile,setLoading}=useContext(AuthContext)
const [showPassword,setShowPassword]=useState(false)
    const { register, handleSubmit, formState: { errors },reset} = useForm();
  

    const onSubmit = async (data) => {
        try {
            const { name, Photo, Email, password } = data;

        
            // await createUser(Email, password);
           
            // await profile(name, Photo);
            // setLoading(false)
        
            reset();

            // toast.success("User created successfully");
        } catch (error) {
            console.error(error);
            // toast.error(error.message);
        }
    };

    return (
    <div >
         {/* <Helmet>
            <title>ArtRoof | Register</title>
          </Helmet> */}
     
      <div className='flex justify-around md:flex-row flex-col gap-1 pt-16'>
      <div>
      {/* <Lottie animationData={lot2} loop={true} style={{height:500}} /> */}
        </div>
         <div className='md:w-1/2 w-full -mt-6'>
         <div className='flex justify-center items-center mt-10'>
         <form onSubmit={handleSubmit(onSubmit)} className=' w-full md:w-full border-2 md:p-8 p-2 space-y-3 grid grid-cols-1 rounded-2xl'>
          <h1 className='text-2xl font-bold text-[#151515] dark:text-white font-poppins  duration-500 hover:text-[#AF9F7B] text-center'>Register Here</h1>
              <div>
                  <label htmlFor="" className='dark:text-white'>Name</label> <br />
                  <input type="text" placeholder="Name" className='w-full p-3 border-b-2 border-black outline-none' {...register("name",{required:true})} />
                  {errors.name && <p role="alert" className='text-red-600 text-lg'>This field required</p>}
              </div>
             
              <div>
                  <label htmlFor="" className='dark:text-white'>Email</label> <br />
                  <input type="text" placeholder="Email"  className='w-full p-3 border-b-2 border-black outline-none' {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} /> 
                  {errors.Email && <p role="alert" className='text-red-600 text-lg'>Please give valid Email</p>}
              </div>
              <div>
                  <label htmlFor="" className='dark:text-white'>photo URL</label> <br />
                  <input type="text" placeholder="Photo"  className='w-full p-3 border-b-2 border-black outline-none' {...register("Photo",{required:true})} />
                  {errors.Photo && <p role="alert" className='text-red-600 text-lg'>This field required</p>}
              </div>
              <div className='relative'>
                  <label htmlFor="" className='dark:text-white'>Password</label> <br />
                  <input 
                  type={ showPassword ?"text" :"password" }
                  placeholder="Password"  className='w-full p-3 border-b-2 border-black outline-none' {...register('password', { 
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
          <span className='absolute top-[45%] transform -translate-x-8' onClick={()=>setShowPassword(!showPassword)}>
              {
                  showPassword ? <FaRegEyeSlash className='text-2xl' /> : <FaRegEye className='text-2xl' />
              }
          </span>
          
                 {errors.password && <p role="alert" className='text-red-600 text-lg'>{errors.password.message}</p>}
                  </div>
      
        
    
          <input type="submit" value="Create an acoount" className='btn w-full font-lato sm:text-xl text-balance bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B]'/>
          <p className='dark:text-white'>Already have an account?Please <Link to='/login' className='btn-link text-lg font-sora font-bold'>Sign In</Link></p>
        </form>
      
         </div>
         </div>
      </div>
     
        
    </div>
  
    );
};

export default Register;