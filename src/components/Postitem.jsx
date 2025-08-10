import React, { useContext, useState } from "react";
import { getFixedDate } from './../lib/formatdate';
import { Link, useLocation } from "react-router-dom";
import Comments from "../pages/Comments";
import Createcomment from "./Createcomment";
import { auth } from './../context/Logincontext';
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { deletepost } from "../api/Deletepost.api";
import Loading from "./Loading";

export default function Postitem({ posts }) {
   const queryClient = useQueryClient()
  const{isPending,mutate}=useMutation({mutationFn:deletepost,
     onSuccess:()=>{
       queryClient.invalidateQueries({ queryKey: ['posts'] })
if(isuser?._id){
       queryClient.invalidateQueries({ queryKey: ['profile',isuser._id] })

}
     }
    
    
    })
  const {isuser}=useContext(auth)
  const {
    body,
    _id,
    image,
    user: { name, photo,_id:userid },
    createdAt,
  } = posts;
  const location=useLocation().pathname.startsWith('/post')
  const [isopen,setopen]=useState(location)
  return (
    <>
    {isPending&&<Loading></Loading>}
      <div className="max-w-xl my-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
 <div className=" flex justify-between">
        <div className="flex items-center p-2">
            <img src={photo} className=" size-20" alt="" />
            <div>
                <span>{name}</span>
                <p className=" text-gray-500">{getFixedDate( createdAt)}</p>
            </div>
        </div>
        {userid==isuser?._id&&   <i onClick={()=>mutate(_id)} className=" cursor-pointer fa-solid fa-close text-xl m-5"></i>}
        
 </div>
        <Link to={`/post/${_id}`}>
          <img className="w-full " src={image}  />
        </Link>
        <div className="p-5">
         
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
           {body}
          </p>
        </div>
        <div className=" flex justify-between py-2 px-2 border-t border-b">
            <i className="fa-solid fa-thumbs-up text-blue-600"></i>
            <i onClick={()=>setopen(!isopen)} className="fa-solid fa-comment text-blue-600 cursor-pointer"></i>
            <i className="fa-solid fa-share text-blue-600"></i>
        </div>
{isopen&&
<>
<Createcomment id={_id}></Createcomment>
<Comments id={_id}></Comments>
</>
}
      </div>
    </>
  );
}
