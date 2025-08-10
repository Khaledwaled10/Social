import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Getcomments } from '../api/comment/comments.api'
import Loading from '../components/Loading'
import Commentsitem from '../components/Commentsitem'

export default function Comments({id}) {
    const {isLoading,isError,error,data}=useQuery({queryKey:['comments',id],queryFn:()=>Getcomments(id)})
  if(isLoading){
    return <Loading></Loading>
  }
  if(isError){
    <h2>{error.message}</h2>
  }

    return (
    <>
    {data.comments.map(comments=><Commentsitem key={comments.id} comments={comments}></Commentsitem>)}
    </>
  )
}
