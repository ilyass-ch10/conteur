import { useState } from "react"

function Form() {
    const [nom, setNom] = useState("")
    const [pass, setPassword] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault()
        alert(`User: ${nom} Password: ${pass}`)
    }
    
    return (
       <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="nom" 
            placeholder="Saisissez votre user" 
            value={nom}
            onChange={(e) => setNom(e.target.value)}
        />
        
        <input 
            type="password" 
            name="pass" 
            placeholder="Password" 
            value={pass}
            onChange={(e) => setPassword(e.target.value)}
        />
        

        <input type="submit" value="Envoyer" />
        <p>{nom}</p>
       </form>
    )
}

export default Form