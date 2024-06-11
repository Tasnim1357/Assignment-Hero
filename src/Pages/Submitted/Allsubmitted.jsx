import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Allsubmitted = () => {
    const {user,loading}=useContext(AuthContext)

    const { data: submitted = [], isLoading } = useQuery({
        queryKey: ['submitted', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
          const { data } = await axios.get(`http://localhost:5000/submitted`, {
           
          });
          return data;
        },
      });
      console.log(submitted)
    //   let modifiedLink
    return (
        <div className='pt-32 space-y-8 px-3'>
            <h1 className='text-4xl font-poppins font-semibold text-center'>All Submitted Assignments</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    submitted.map(s=><div key={s._id}>


                        {
                            (s.pdflink.includes('drive.google.com')) ? <iframe src={s.pdflink.replace(/\/[^\/]*$/, '/preview')} height={350}></iframe>
                            :
                            <iframe src={s.pdflink} height={400}></iframe>
                        }

                    </div>)
                }
            </div>
        </div>
    );
};

export default Allsubmitted;