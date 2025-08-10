import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { registerscheme } from './../lib/Register.scheme';
import Feedback from "../components/Feedback";
import { adduser } from "../api/Register.api";
import { useNavigate } from "react-router-dom";
export default function Register() {
const [error,seterror]=useState('')
const [loading,setloading]=useState(false)
const navigate=useNavigate()

const {register,handleSubmit,formState:{errors}} =useForm({
    resolver: zodResolver(registerscheme),
defaultValues:{
   "name": "",
    "email":"",
    "password":"",
    "rePassword":"",
    "dateOfBirth":"",
    "gender":""
}
})

async function onsubmit(data){
  setloading(true)
  try{
    const res=await adduser(data);
if(res.message=='success'){
  console.log(res)
  setloading(false)
  seterror('')
navigate('/')

}
  }
  catch(error){
    
    setloading(false)
    seterror(error.response?.data?.error)
  }
}

console.log(errors.name?.message);

  return (
    <>
<p className="w-1/3 mx-auto my-1">
    {error&&<Feedback msg={error}></Feedback>}
</p>
      <form onSubmit={handleSubmit(onsubmit)} className="max-w-md mx-auto w-full shadow p-7">
        <div className="relative z-0 w-full mb-5 group">
          <input
          {...register('name')}
            type="text"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
         {errors.name&& <Feedback msg={errors.name?.message}></Feedback>}
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>

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

<div className="relative z-0 w-full mb-5 group">
          <input
          {...register('rePassword')}
            type="password"
          autoComplete="off"

            id="rePassword"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
         {errors.rePassword&& <Feedback msg={errors.rePassword?.message}></Feedback>}
          <label
            htmlFor="rePassword"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            rePassword
          </label>
        </div>


<div className="relative z-0 w-full mb-5 group">
          <input
          {...register('dateOfBirth')}
            type="date"
            id="date"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
         {errors.dateOfBirth&& <Feedback msg={errors.dateOfBirth?.message}></Feedback>}
          <label
            htmlFor="date"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Date of Birth
          </label>
        </div>



<div className="flex items-center mb-4">
          
  <input {...register('gender')} id="male" type="radio" value='male'  className="w-4 h-4  accent-blue-600 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
  <label htmlFor="male" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
</div>
<div className="flex items-center mb-4">
  <input id="female" {...register('gender')} type="radio" value='female'  className="w-4 h-4 accent-blue-600 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
  <label htmlFor="female" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
</div>
         {errors.gender&& <Feedback msg={errors.gender?.message}></Feedback>}

<button className=" bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">{loading?<i className="fa-solid fa-spin fa-spinner"></i>:'Register'}</button>
      </form>
    </>
  );
}
