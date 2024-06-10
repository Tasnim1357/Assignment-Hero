import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SubmitCard from './SubmitCard';
import Lottie from 'lottie-react';
import loader from '../../../public/Animation - 1718038883862.json'
const MySubmitted = () => {
    const {user,loading}=useContext(AuthContext)

    const { data: submitted = [], isLoading } = useQuery({
        queryKey: ['submitted', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
          const { data } = await axios.get(`http://localhost:5000/myassignments/${user?.email}`, {
           
          });
          return data;
        },
      });
      console.log(submitted)
    return (
        <div className='pt-32 space-y-8 px-3'>
            <h1 className='text-4xl font-poppins font-semibold text-center'>My Submitted Assignments</h1>
            <div>
                {
                    isLoading? <div className='flex justify-center'>
<Lottie animationData={loader} loop={true} style={{height:500}} /></div> 
                    :
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {
                           submitted.map(submit=><SubmitCard key={submit._id} item={submit}></SubmitCard>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default MySubmitted;