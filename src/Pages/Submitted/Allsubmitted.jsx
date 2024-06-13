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
          const { data } = await axios.get(`https://assignment11-server-ten.vercel.app/submitted`, {
           
          });
          return data;
        },
      });
     
    //   let modifiedLink
    return (
        <div className='pt-32 space-y-8 px-3'>
            <h1 className='text-4xl font-poppins font-semibold text-center dark:text-white'>All Submitted Assignments Preview</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-24'>
                {
                    submitted.map(s=><div key={s._id}>


                        {
                            (s.pdflink.includes('drive.google.com')) ? <iframe src={s.pdflink.replace(/\/[^\/]*$/, '/preview')} height={350} className='shadow-lg p-3 rounded-2xl dark:border-2 border-white'></iframe>
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