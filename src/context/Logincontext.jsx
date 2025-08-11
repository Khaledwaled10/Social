import React, { createContext, useEffect, useState} from 'react'
import { GetuserData } from '../api/userdata.api';


export const auth=createContext(null);

export default function Logincontext({children}) {
async function getuser(){
    const res=await GetuserData();
    setuser(res.user);    
} 
const [islogin,setlogin]=useState(null);
const [isuser,setuser]=useState(null);

useEffect(()=>{
    if(localStorage.getItem('token')){
setlogin(localStorage.getItem('token'))    
setuser(null)
getuser()
}

},[])
 
return <auth.Provider value={{islogin,setlogin,isuser,setuser,getuser}}>
    {children}
</auth.Provider>

}
