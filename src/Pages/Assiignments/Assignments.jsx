import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import AssignmentCard from './AssignmentCard';
import Swal from 'sweetalert2';
import loader from '../../../public/Animation - 1718038883862.json'
import Lottie from 'lottie-react';


const Assignments = () => {
  const [selectedId, setSelectedId] = useState(null)


    const [difficulty, setDifficulty] = useState('');

    const { data: assignments = [], isLoading, isError,refetch } = useQuery({
      queryKey: ['assignments', difficulty],
      queryFn: async () => {
        const res = await axios.get('https://assignment11-server-ten.vercel.app/assignments',{withCredentials: true}, {
          params: { difficulty },
        });
        return res.data;
      },
    });
  
    const handleFilterChange = (event) => {
      setDifficulty(event.target.value);
    };

    const handleDelete= (id)=>{

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          const res= await axios.delete(`https://assignment11-server-ten.vercel.app/assignments/${id}`,{withCredentials: true});
          console.log(res.data);
          if(res.data.deletedCount>0){
            
             Swal.fire({
            title: "Deleted!",
            text: "Your assignment has been deleted.",
            icon: "success"
          });
          refetch()
            
          }
         
        }
      });
    }
  
  
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

            <div>
              {
                isLoading ? <div className='flex justify-center'>  <Lottie animationData={loader} loop={true} style={{height:500}} /></div> 
:
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        assignments.map(assignment=> <AssignmentCard key={assignment._id} assignment={assignment} handleDelete={handleDelete}></AssignmentCard>
                       
                      )
                    }



                    
            </div>
              }
            </div>
            
        </div>
    );






   
};

export default Assignments;