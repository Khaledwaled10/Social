import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { Getposts } from '../api/posts/getposts.api';
import Loading from '../components/Loading';
import Postitem from './../components/Postitem';
import Addpost from '../components/Addpost';

export default function Home() {
  const {isLoading,isError,error,data}=useQuery({queryKey:['posts'],queryFn:Getposts})
 if(isLoading){
  return <Loading></Loading>
 }if(isError){
return <h2>{error.message}</h2>
 }

 
  return (
    <>
    <Addpost></Addpost>
{ data.posts.map(posts=><Postitem key={posts.id} posts={posts}></Postitem>)   }
    </>
  )
}
