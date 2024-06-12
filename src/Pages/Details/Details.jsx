import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Modal from './Modal';

const Details = () => {
    const item= useLoaderData()
    const {user}=useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const {_id, title, description, marks, image,date, difficulty, creator}=item
    function open(item) {
        setCurrentItem(item);
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }
    return (
        <div className='pt-28 space-y-8 px-3'>
            <h1 className='text-4xl font-poppins font-semibold text-center dark:text-white'>Details of Assignment</h1>
            <div className="card lg:card-side bg-base-100 shadow-xl md:h-[60vh] h-[80vh]">
  <figure className='lg:w-1/2 w-full h-full'><img src={image} className='w-full h-full object-center' alt="Album"/></figure>
  <div className="card-body space-y-6">
  <div className='space-y-5'>
  <h2 className="card-title text-3xl font-semibold">{title}</h2>
  <p className='text-xl font-medium'>{description}</p>
  </div>
  <div className='flex justify-between flex-wrap'>
    <p className='font-semibold text-xl'>Marks : {marks}</p>
    <p className='text-xl font-medium'>Date : {date}</p>
  </div>
  <div>
    <p className='text-xl font-medium'>Difficulty level : {difficulty}</p>
   
  </div>
    <div className="flex justify-center items-end h-full w-full">
      <Link className='w-full'><button onClick={() => open(item)} className="btn  btn-outline duration-500 sm:text-lg text-base w-full">Take Assignment</button></Link>
    </div>
  </div>
  {isOpen && (
                     <Modal close={close} isOpen={isOpen} item={currentItem}  />
                 )} 
</div>
        </div>
    );
};

export default Details;