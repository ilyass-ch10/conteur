import { useState } from "react"
import { Component } from 'react';
function  CangeNom(){
  const [nom,setnom]=useState("")

  const change=(event)=>{setnom(event.target.value)}
 
  return ( <div>
    <input type='text' value={nom} onChange={change} placeholder='saisir ici'/>
    <p> salut:{nom}</p>
    </div>
  )

  

}
export default CangeNom;