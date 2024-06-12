import {React,useContext,useState} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';


const CreateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user}= useContext(AuthContext)

    const handleAdd=(e)=>{
        e.preventDefault()
        const form =e.target;
        const title=form.title.value;
        const description=form.description.value;
        const marks=form.marks.value;
        const image=form.image.value;
        const difficulty=form.difficulty.value;
        const date=form.date.value;
        const creator=form.email.value;
        const newAssignment={title,description,marks,image,difficulty,date,creator}
        console.log(newAssignment)

        axios.post(('http://localhost:5000/assignments'),newAssignment)
        .then(res=>{
           console.log(res.data)
           if(res.data.insertedId){
            Swal.fire({
                title: "Great!",
                text: "You created the Assignment!",
                icon: "success"
              });
        }
        })
    }





    return (
        <div className='pt-28 space-y-8 px-3'>
            <h2 className='text-3xl font-poppins font-semibold text-center dark:text-white'>Create Your Assignment</h2>
         <form onSubmit={handleAdd} className='shadow-lg rounded-2xl p-3'>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-5'>
           <div >
           <label className='font-poppins text-lg dark:text-white'>Title<br />
                        <input type="text" placeholder='Title' required name='title' className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                    </label>
            </div>
                <div>
                <label className='font-poppins text-lg dark:text-white'>Marks <br />
                        <input type="number" placeholder='Marks' required name='marks' className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                    </label>

                </div>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-5'>
            <div>
                  
            <label className='font-lato text-lg dark:text-white'> Assignment Difficulty level<br />
                        {/* <input type="text" placeholder='Subcategory_Name' required name='subcategory_Name' className='p-2 mt-2 dark:text-black w-full border-b-black border-b-2 outline-none' /> */}
                        <select required name="difficulty" className='dark:text-black w-full p-2 mt-2' id="cars">
    <option value="Easy">Easy</option>
    <option value="Medium">Medium</option>
    <option value="Hard">Hard</option>
  </select>
                      
                    </label>
            </div>
           
                   
            <div>
            <label className='font-lato text-lg dark:text-white pb-24'>Submission Date <br />
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} required name='date'  />
                        {/* <input type="text" placeholder='date' required name='date' className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' /> */}
                    </label>
            </div>
           </div>
           <div className='my-3'>
                    <label className='font-lato text-lg dark:text-white'>Creator Email <br />
                      
                        <input type="email" placeholder='Email' name='email' value={user?.email} className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                    </label>
                 
                    </div>
           <div>
           <label className='font-lato text-lg dark:text-white'>Thumbnail Image URL <br />
                        <input type="text" placeholder='Image' required name='image' className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                    </label>
           </div>
           <div className='my-5'>
           <label className='font-lato text-lg dark:text-white'>Description <br />
                        <input type="text" placeholder='Description' required name='description' className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                    </label>
           </div>
           <div>
                        
            <input type="submit" name="" id="" value="Create" className="btn btn-block font-poppins text-lg bg-[#f0ede7] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B] mt-3" />
             </div>
         </form>
        </div>
    );
};

export default CreateAssignment;