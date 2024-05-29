import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import AssignmentCard from './AssignmentCard';

const Assignments = () => {
    // const {data: assignments = []}=useQuery({
    //     queryKey:['assignments'],
    //     queryFn:async ()=>{
    //         const res =await axios.get('http://localhost:5000/assignments')
    //         return res.data;
    //     }

    // })

    const [difficulty, setDifficulty] = useState('');

    const { data: assignments = [], isLoading, isError } = useQuery({
      queryKey: ['assignments', difficulty],
      queryFn: async () => {
        const res = await axios.get('http://localhost:5000/assignments', {
          params: { difficulty },
        });
        return res.data;
      },
    });
  
    const handleFilterChange = (event) => {
      setDifficulty(event.target.value);
    };
  
  
    return (
        <div className='pt-24 space-y-8 px-3'>
            <h2 className='text-3xl font-poppins font-semibold text-center'>Explore Assignments</h2>
            <p className='text-lg text-gray-500 text-center'>Stay organized and manage your assignments effortlessly. Submit, track, and receive feedback on all your tasks in one convenient and user-friendly platform.</p>
        
     
     <div className="flex justify-center mb-4">
                <select 
                  onChange={handleFilterChange} 
                  value={difficulty} 
                  className="p-4 border border-green-500 rounded-xl w-1/4 bg-white"
                >
                  <option value="">All</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        assignments.map(assignment=><AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)
                    }
            </div>
        </div>
    );
};

export default Assignments;