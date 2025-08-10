import React, { useContext } from 'react'
import Navbar from './../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { mode } from './../context/Themecontext';

export default function Layout() {
  const {theme,toggletheme}=useContext(mode);
  return (
    <>
    <div className={`${theme=='dark'&&'dark'} dark:bg-gray-800 dark:text-white  min-h-screen flex flex-col justify-between items-center`}>
    <Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>    
    </div>
    </>
  )
}
