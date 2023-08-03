import React, { useEffect, useState } from 'react'

export default function Page1() {
    function HandleApi1(){
        fetch("https://www.boredapi.com/api/activity")
        .then((response)=>response.json())
        .then((data)=>addActivity(data.type))
        
    }
    const[add,addActivity]=useState([]);

  return (
   <>
  
       {
        useEffect(()=>{
            HandleApi1();
          
        },[])
       }
         <h1>{add}</h1>
        
   </>
  )
}
