import { useState } from "react"
import { Component } from 'react';
function  CangeNom(){
  const [a,seta]=useState(0)

 
  return ( <div>
    <p>{a}</p>
    <button onClick={()=>seta(a+1) }>+</button>
    <button onClick={()=>seta(a-1) }>-</button>
 
    </div>
  )

  

}
export default CangeNom;