import { useState } from "react"
import {GeminiContext} from "./components/Gemini"

const Contextprovider=( { children } )=>{
       const [Reponse,setResponse]=useState([])
    return(
       <GeminiContext.Provider value={{Reponse,setResponse}}>
         {children}
       </GeminiContext.Provider>
    )
}

export default Contextprovider