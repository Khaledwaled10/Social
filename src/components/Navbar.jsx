import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './../context/Logincontext';
import { useContext } from 'react';
import { mode } from '../context/Themecontext';
export default function Navbar() {
  const [isopend,setopend]=useState(false)
const {islogin,setlogin,isuser}=useContext(auth);
const {theme,toggletheme}=useContext(mode);
const navigate=useNavigate()  

function toggle(){
   setopend(!isopend) 
  }
  function logout(){
    setlogin(null);
    localStorage.removeItem('token')
  navigate('/')
  }
    return (
    <> 
    

<nav className=" shadow bg-white border-gray-200 dark:bg-gray-900 w-full">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
<h2 className='text-blue-600 logo font-bold'>Social</h2>
    <button onClick={toggle} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className={`${!isopend&&'hidden'} w-full md:block md:w-auto`} id="navbar-default">
      <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       {
        islogin?
        <>

                <li>
          <Link to="/home" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
          <li >
          <p  onClick={logout} className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 cursor-pointer" >Logout</p>
        </li>
        <li >
        <Link className='flex items-center gap-3' to={`/profile/${isuser?._id}`}>
          <img src={isuser?.photo} alt="" className=' size-10' />
        
        <p className='text-blue-600'>{isuser?.name}</p>
        </Link>
        </li>
   
        </>
:
<>

        <li>
          <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Login</Link>
        </li>
        <li>
          <Link to="/register" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Register</Link>
        </li>

</>


       }
        <li>

<label className="inline-flex items-center cursor-pointer">
  <input onChange={toggletheme} checked={theme=='dark'} type="checkbox" defaultValue className="sr-only peer" />
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
<i className='text-blue-600 fa-solid fa-moon'></i>
<i className='text-blue-600 fa-solid fa-sun'></i>


  </span>
</label>

        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
