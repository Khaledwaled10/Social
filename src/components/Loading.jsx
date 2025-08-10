import React from 'react'
import {RotatingLines  } from 'react-loader-spinner'
export default function Loading() {
  return (
    < >
    <div className=' flex justify-center items-center'>

      <RotatingLines 
  visible={true}
  height="96"
  width="60"
  color=""
  strokeColor='oklch(54.6% 0.245 262.881)'
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  </div>

    
    </>
  )
}
