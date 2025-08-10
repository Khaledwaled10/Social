import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod"
import { loginscheme } from './../lib/Login.scheme';
import { useState } from "react";
import Feedback from './../components/Feedback';
import { Loginfn } from "../api/Login.api";
import { auth } from './../context/Logincontext';

export default function Login() {
const [error,seterror]=useState('')
const [loading,setloading]=useState(false)
const navigate=useNavigate()
const {setlogin}=useContext(auth);
const {register,handleSubmit,formState:{errors}} =useForm({
    resolver: zodResolver(loginscheme),
  defaultValues:{
    "email":"",
    "password":"",

}
})

 async function onsubmit(data){
   setloading(true)
  try{
    const res=await Loginfn(data);
if(res.message=='success'){
    
    
    setloading(false)
    seterror('')
  navigate('/home')
  localStorage.setItem('token',res.token)
  setlogin(res.token);
}  
}
  catch(error){
    
    setloading(false)
    seterror(error.response?.data?.error)
  }
   
}

  return (
    <>
    <p className="w-1/3 mx-auto my-1">
        {error&&<Feedback msg={error}></Feedback>}
    </p>
      <form onSubmit={handleSubmit(onsubmit)} className="max-w-md mx-auto w-full shadow p-7">
       

<div className="relative z-0 w-full mb-5 group">
          <input
          {...register('email')}

            type="email"
            id="Email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
                   {errors.email&& <Feedback msg={errors.email?.message}></Feedback>}
          
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email Address
          </label>
        </div>
<div className="relative z-0 w-full mb-5 group">
          <input
          {...register('password')}
          autoComplete="off"
            type="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
                   {errors.password&& <Feedback msg={errors.password?.message}></Feedback>}
          
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>




<button className=" bg-blue-600 btn text-white">{loading?<i className="fa-solid fa-spin fa-spinner"></i>:'Login'}</button>
      <p className=" mt-3">Don't Have Account  , <span className="text-blue-600 font-bold">
        <Link to={'/register'}>Register first</Link>
        </span>
         </p>
      </form>
    </>
  );
}
