import React from 'react'
import { getFixedDate } from './../lib/formatdate';

export default function Commentsitem({comments}) {
const {content,commentCreator:{name,photo},createdAt}=comments
    return (
    <>
    <div className=''>

<div className="flex items-center gap-4 p-2">
            <img src={photo} className="size-10" alt="" />
            <div>
                <span>{name}</span>
                <p className=" text-gray-500">{getFixedDate( createdAt)}</p>
            <p className=' font-semibold'>{content}</p>
            </div>
        </div>
    </div>
    </>
  )
}
