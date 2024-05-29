import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {

    const {data: features = []}=useQuery({
        queryKey:['features'],
        queryFn:async ()=>{
            const res =await axios.get('http://localhost:5000/features')
            return res.data;
        }

    })
    
    return (
        <div className='mt-12 space-y-8 px-2'>
            <h2 className='sm:text-5xl text-3xl font-poppins font-bold text-center'>Our Features</h2>
            <p className='text-lg text-gray-500 text-center'>Our platform offers seamless assignment creation, real-time submission tracking, efficient grading, deadline reminders, collaborative tools, and comprehensive progress monitoring to enhance productivity and learning.</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8'>
                {features.map(feature=><FeatureCard key={feature._id} feature={feature}></FeatureCard>)}
            </div>
         
        </div>
    );
};

export default Features;