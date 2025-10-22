import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Form from './Form';
import { useState } from "react"
// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { num: 0 }
//   }
  
//   incri = () => {
//     this.setState({ num: this.state.num + 1 })
//   }
  
//   decri = () => {
//     this.setState({ num: this.state.num - 1 })
//   }
  
//   render() {
//     return (
//       <div >
//         <p>{this.state.num}</p>
//         <button onClick={this.incri}>incrementer</button>
//         <button onClick={this.decri}>decrementer</button>
//       </div>
//     )
//   }
// }
// function  App(){
//   const [nom,setnom]=useState("")

//   const change=(event)=>{setnom(event.target.value)}
 
//   return ( <div>
//     <input type='text' value={nom} onChange={change} placeholder='saisir ici'/>
//     <p> salut:{nom}</p>
//     </div>
//   )

// }

// function App(){
//   return (
//     <>
//       <h1>Formulaire d'inscription</h1>
//       <Form/>
//     </>
//   )
// }

export default App;
