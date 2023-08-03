import React, { useEffect, useState } from 'react'

export default function Par() {
    function HandleApi2(){
        fetch("https://www.boredapi.com/api/activity")
        .then((response)=>response.json())
        .then((data)=>addActivity(data.accessibility))
        
    }
    const[add,addActivity]=useState([]);

  return (
   <>
  
       {
        useEffect(()=>{
            HandleApi2();
          
        },[])
       }
         <h1>{add}</h1>
        
   </>
  )
}
