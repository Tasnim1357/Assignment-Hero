import React from 'react';
import { Link } from 'react-router-dom';

const SubmitCard = ({item}) => {
    const {title, status, marks, obtained,feedback}=item
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-16">
        <div className="card-body bg-[#fcf7f7] rounded-2xl">
          <h2 className="card-title text-center text-2xl text-[#212F4F]">{title}</h2>
          <div>
            <p className='text-xl font-medium text-green-500'>Status: {status}</p>
            <p className='text-xl font-medium'>Marks: {marks}</p>
           
          </div>
          <div>
            <p className='text-xl font-medium'>Obtained Marks: {obtained}</p>
            <p className='text-xl font-medium'>Feedback : {feedback}</p>
          </div>
          <div className="card-actions justify-end">
          <Link to={`/`}>  <button className="btn btn-outline btn-success text-xl duration-500">Go to Home</button></Link>
          </div>
        </div>
      </div>
    );
};

export default SubmitCard;