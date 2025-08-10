import React, { createContext, useEffect, useState } from 'react'
export const mode=createContext()
export default function Themecontext({children}) {
  const [theme,settheme]=useState();
  function toggletheme(){
    if(theme==='light'){
settheme('dark');
localStorage.setItem('theme','dark')
    }else{
        settheme('light');
localStorage.setItem('theme','light')
    }
  }
useEffect(()=>{
if(localStorage.getItem('theme')==='dark'){
localStorage.setItem('theme','dark')
}

},[])
return <mode.Provider value={{theme,toggletheme}}>{children}</mode.Provider>


}
