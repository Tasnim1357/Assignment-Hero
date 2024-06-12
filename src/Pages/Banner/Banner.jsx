import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div>
            <div className='bg-[url("https://i.ibb.co/gdg0sC7/handshake-colleagues-sitting-workplace-office-life-160672-40677.jpg")] rounded-2xl bg-fixed h-[95vh] bg-no-repeat bg-cover bg-center flex justify-center items-center'>
                    <div className='h-[50vh] rounded-2xl bg-black md:w-1/2 w-full  p-3 flex flex-col items-center justify-center bg-opacity-60'>
                       <div>
                       <h2 className='md:text-6xl text-3xl font-poppins font-bold text-white leading-relaxed'>
                            Assignment {' '}<span className='text-blue-500'> <Typewriter
            words={['Hero', 'Partner', 'Helper', 'Search']}
            loop={false}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /></span>
                        </h2>
                        <p className='font-poppins md:text-3xl text-base font-semibold text-white'>Your Favourite Study Partner!!!</p>
                        <p className='text-white text-lg'>Effortlessly manage assignments with our intuitive platform, streamlining task creation, submission, and grading for teachers and students alike.</p>
                       </div>
                    </div>
            </div>
        </div>
    );
};

export default Banner;