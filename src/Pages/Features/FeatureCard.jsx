import React from 'react';

const FeatureCard = ({feature}) => {
    const {title,description,img}=feature;
    return (
        <div className="card  bg-base-100 shadow-xl image-full cursor-pointer hover:scale-105 transform duration-500">
  <figure className='h-[250px]'><img src={img} alt="Shoes" className='w-full' /></figure>
  <div className="card-body">
    <h2 className="text-white text-3xl font-poppins font-semibold">{title}</h2>
    <p className='text-[#f7eeac] text-lg font-poppins'>{description}</p>
   
  </div>
</div>
    );
};

export default FeatureCard;