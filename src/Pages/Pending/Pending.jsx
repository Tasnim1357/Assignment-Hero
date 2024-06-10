import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Pending = () => {

    const {user,loading}=useContext(AuthContext)

    const { data: pending = [], isLoading } = useQuery({
        queryKey: ['pending', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
          const { data } = await axios.get(`http://localhost:5000/pending`, {
            params:{
                status:'pending'
            }
           
          });
          return data;
        },
      });
    return (
        <div className='pt-32 space-y-8 px-3'>
         <h2 className='text-4xl font-poppins font-semibold text-center'>Pending Assignments</h2>   
        </div>
    );
};

export default Pending;