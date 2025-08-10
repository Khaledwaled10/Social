import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom'
import { Getprofile } from '../api/profile.api';
import Postitem from '../components/Postitem';

export default function Profile() {
  const {id}=useParams();
  const {data}=useQuery({queryKey:['profile',id],queryFn:()=>Getprofile(id)})
  console.log(data?.posts);
    
  return (
    <>
    { data?.posts.map(posts=><Postitem key={posts.id} posts={posts}></Postitem>)   }
    
    </>
  )
}
