import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
export const ThemeContext=createContext(null)

const Root = () => {

    const [theme, setTheme] = useState(() => {
    
        return localStorage.getItem('theme') || 'light';
      });
    
      useEffect(() => {
        if (!localStorage.getItem('theme')) {
          // Only apply the preferred theme if no theme is stored in localStorage
          if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            setTheme('dark');
          } else {
            setTheme('light');
          }
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('theme', theme);
    
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [theme]);
    
      const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      };
    
      const contextValue = { handleTheme,theme };
    return (
        <div className='max-w-[1700px] dark:bg-black mx-auto sm:px-1 px-0 '> 

<ThemeContext.Provider value={contextValue}>

        <Navbar></Navbar>
            <Outlet></Outlet>
        <Footer></Footer>
        </ThemeContext.Provider>
        </div>
    );
};

export default Root;