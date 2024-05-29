import React, {  useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const UpdateAssignment = () => {
    const {title,description,marks,image,difficulty,date,_id}=useLoaderData();
  
    const [startDate, setStartDate] = useState(date);
    // const {user}= useContext(AuthContext)
    const navigate= useNavigate()

    const handleAdd=(e)=>{
        e.preventDefault()
        const form =e.target;
        const title=form.title.value;
        const description=form.description.value;
        const marks=form.marks.value;
        const image=form.image.value;
        const difficulty=form.difficulty.value;
        const date=form.date.value;
        const newAssignment={title,description,marks,image,difficulty,date}
        console.log(newAssignment)

        axios.patch((`http://localhost:5000/assignments/${_id}`),newAssignment)
        .then(res=>{
           console.log(res.data)
           if(res.data.modifiedCount > 0){
            Swal.fire({
                title: "Great!",
                text: "You updated the Assignment!",
                icon: "success"
              });
              navigate('/assignments')
        }
        })
    }
    return (
        <div className='pt-24 space-y-8 px-3'>
            <h2 className='text-3xl font-poppins font-semibold text-center'>Update Your Assignment</h2>
         <form onSubmit={handleAdd} className='shadow-lg rounded-2xl p-3'>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-5'>
           <div >
           <label className='font-poppins text-lg dark:text-white'>Title<br />
                        <input type="text" placeholder='Title' required name='title' defaultValue={title} className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                    </label>
            </div>
                <div>
                <label className='font-poppins text-lg dark:text-white'>Marks <br />
                        <input type="number" placeholder='Marks' required name='marks' defaultValue={marks} className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                    </label>

                </div>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-5'>
            <div>
                  
            <label className='font-lato text-lg dark:text-white'> Assignment Difficulty level<br />
                        {/* <input type="text" placeholder='Subcategory_Name' required name='subcategory_Name' className='p-2 mt-2 dark:text-black w-full border-b-black border-b-2 outline-none' /> */}
                        <select name="difficulty" defaultValue={difficulty} className='dark:text-black w-full p-2 mt-2' id="cars">
    <option value="Easy">Easy</option>
    <option value="Medium">Medium</option>
    <option value="Hard">Hard</option>
  </select>
                      
                    </label>
            </div>
           
                   
            <div>
            <label className='font-lato text-lg dark:text-white pb-24'>Submission Date <br />
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} required name='date'/>
                        {/* <input type="text" placeholder='date' required name='date' className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' /> */}
                    </label>
            </div>
           </div>
           
           <div>
           <label className='font-lato text-lg dark:text-white'>Thumbnail Image URL <br />
                        <input type="text" placeholder='Image' required name='image' defaultValue={image} className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                    </label>
           </div>
           <div className='my-5'>
           <label className='font-lato text-lg dark:text-white'>Description <br />
                        <input type="text" placeholder='Description' defaultValue={description} required name='description' className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                    </label>
           </div>
           <div>
                        
            <input type="submit" name="" id="" value="Update Assignment" className="btn btn-block font-poppins text-lg bg-[#f0ede7] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B] mt-3" />
             </div>
         </form>
        </div>
    );
};

export default UpdateAssignment;