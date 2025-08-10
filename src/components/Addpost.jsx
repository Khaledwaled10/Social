import { useMutation,useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import Loading from './Loading'
import { Createposts } from '../api/posts/createpost.api'
import toast from 'react-hot-toast'

export default function Addpost() {
const [img ,setimg]=useState()
const [body ,setbody]=useState()
const [imgsrc ,setimgsrc]=useState()
    const queryClient = useQueryClient()

const{isError,isSuccess,isPending,error,mutate,data}=useMutation({mutationFn:Createposts,
   onSuccess:()=> queryClient.invalidateQueries({ queryKey: ['posts'] })
})
console.log(data)
function handlechangefile(e){
    const file =e.target.files[0];
setimg(file)
setimgsrc(URL.createObjectURL(file))
}

function handleAddpost(e){
    e.preventDefault();
    const formdata=new FormData();
    formdata
    if(body){
    formdata.append('body',body)
    }
    if(img){
        formdata.append('image',img)
    }
    mutate(formdata)
    clr()
}
function clr(){
    setbody('')
    setimg('')
}


  return (
    <>
{isPending&&<Loading></Loading>}
    <form onSubmit={handleAddpost} className=' w-full px-72'>

  <div className="heading text-center font-bold text-2xl m-5 mt-10 text-gray-800">New Post</div>
  <style dangerouslySetInnerHTML={{__html: "\n  body {background:white !important;}\n" }} />
  <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 borimport { useQueryClient } from '@tanstack/react-query';
der border-gray-300 p-4 shadow-lg max-w-2xl">
  {imgsrc&& <img src={imgsrc} className='w-full' alt="" />}
    <input onChange={handlechangefile} className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" id='file' hidden spellCheck="false" placeholder="Title" type="file" />
    <textarea value={body} onChange={(e)=>setbody(e.target.value)} className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellCheck="false" placeholder="Describe everything about this post here"  />
    
    <div className="icons flex text-gray-500 m-2">
      <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <label htmlFor="file">

      <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
      </label>
      <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
    </div>
    <div className="buttons flex">
      <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div>
      <button className="btn border border-blue-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-blue-500">Post</button>
    </div>
  </div>
</form>

    
    </>
  )
}
