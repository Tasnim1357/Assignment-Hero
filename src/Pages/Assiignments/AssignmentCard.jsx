import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const AssignmentCard = ({assignment,handleDelete}) => {
    const{user}=useContext(AuthContext)
    const {title,marks,image,difficulty,_id,creator}=assignment
    return (
        <div className="card bg-base-100 shadow-xl p-3">
  <figure><img src={image} alt="Shoes" className='w-full h-[250px]' /></figure>
  <div className="card-body p-3">
    <h2 className="card-title font-poppins font-semibold">{title}</h2>
  <div className='flex justify-around flex-wrap'>
    <p className='text-lg font-poppins font-medium'>Marks: {marks}</p>
    <p className='text-lg font-poppins font-medium'>{difficulty}</p>
  </div>
  <div className='flex justify-between flex-wrap'>
   <Link  to={`/update/${_id}`}> <button className='btn btn-outline sm:text-lg text-base duration-500'>
     Update
    </button></Link>

    {
        user?.email===creator? <button onClick={()=>handleDelete(_id)} className='btn btn-outline sm:text-lg text-base duration-500'>
        Delete
      </button>: <button disabled className='btn btn-outline sm:text-lg text-base duration-500'>
      Delete
    </button>
    }
   
  </div>
    <div className="card-actions justify-end w-full">
      <button className="btn btn-outline duration-500 sm:text-lg text-base w-full">View Assignment</button>
    </div>
  </div>
</div>
    );
};

export default AssignmentCard;