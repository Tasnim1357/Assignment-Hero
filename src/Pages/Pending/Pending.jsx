import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PendingCard from './PendingCard';
import Lottie from 'lottie-react';
import loader from '../../../public/Animation - 1718038883862.json'

const Pending = () => {

    const {user,loading}=useContext(AuthContext)

  
    const { data: pending = [], isLoading,refetch } = useQuery({
        queryKey: ['pending', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
          const { data } = await axios.get('http://localhost:5000/pending', {
            params: { status: 'pending' },
          });
          return data;
        },
    });

    

    console.log(pending)
    return (
        <div className='pt-32 space-y-8 px-3'>
         <h2 className='text-4xl font-poppins font-semibold text-center'>Pending Assignments</h2>   
         <div>
            {
                isLoading ? <div className='flex justify-center'>
<Lottie animationData={loader} loop={true} style={{height:500}} /></div> 
:
<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-24'>
    {
        pending.map(p=><PendingCard key={p._id} item={p} refetch={refetch}></PendingCard>)
    }
</div>
            }
         </div>
        </div>
    );
};

export default Pending;