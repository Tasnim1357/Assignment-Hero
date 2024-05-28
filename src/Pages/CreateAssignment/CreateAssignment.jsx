import {React,useState} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const CreateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleAdd=(e)=>{
        e.preventDefault()
        const form =e.target;
        const title=form.title.value;
        const description=form.description.value;
        const marks=form.marks.value;
        const image=form.image.value;
        const difficulty=form.difficulty.value;
        const Subcategory_Name=form.subcategory_Name.value;
        
        const price=form.price.value;
        const rating=form.rating.value;
        const customization=form.customization.value;
        const processing_time=form.processing_time.value;
        const stockStatus=form.stockStatus.value;
        const newArt={name,email,image,item_name,Subcategory_Name,short_description,price,rating,customization,processing_time,stockStatus}
        console.log(newArt)
    }





    return (
        <div className='pt-24 space-y-8 px-3'>
            <h2 className='text-3xl font-poppins font-semibold text-center'>Create Your Assignment</h2>
         <form onSubmit={handleAdd} className='shadow-lg rounded-2xl p-3'>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-5'>
           <div >
           <label className='font-poppins text-lg dark:text-white'>Title<br />
                        <input type="text" placeholder='Title' required name='title' className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                    </label>
            </div>
                <div>
                <label className='font-poppins text-lg dark:text-white'>Marks <br />
                        <input type="text" placeholder='Marks' required name='marks' className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                    </label>

                </div>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-5'>
            <div>
                  
            <label className='font-lato text-lg dark:text-white'> Assignment Difficulty level<br />
                        {/* <input type="text" placeholder='Subcategory_Name' required name='subcategory_Name' className='p-2 mt-2 dark:text-black w-full border-b-black border-b-2 outline-none' /> */}
                        <select name="difficulty" className='dark:text-black w-full p-2 mt-2' id="cars">
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
         </form>
        </div>
    );
};

export default CreateAssignment;