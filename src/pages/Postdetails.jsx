import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Getsingleposts } from '../api/posts/getsingle.api'
import Loading from '../components/Loading'
import Postitem from '../components/Postitem'

export default function Postdetails() {
 const {id}=useParams()
 const {isLoading,isError,error,data}=useQuery({queryKey:['post',id],queryFn:()=>Getsingleposts(id)})   
if(isLoading){
    return <Loading></Loading>
}
if(isError){
    return <h2>{error.message}</h2>
}
 return (
    
    <Postitem posts={data.post}></Postitem>
    
  )
}
