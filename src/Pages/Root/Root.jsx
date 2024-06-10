import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-[1700px] mx-auto sm:px-1 px-0 '> 
        <Navbar></Navbar>
            <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Root;