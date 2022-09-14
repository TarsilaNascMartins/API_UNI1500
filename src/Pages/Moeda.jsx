 import Create from "./../Components/Moedas/Create"
import Index from "./../Components/Moedas/Index";
import {useState} from 'react'
function Moeda(){

    const [componenteAtual,setComponenteAtual] = useState("Index");

    switch (componenteAtual){
    case"Index":
     return <Index setComponenteAtual ={setComponenteAtual}/>
        
     case "Create":
        return<Create setComponenteAtual ={setComponenteAtual}/>

        case "Edit":
            return <h1>Edit</h1>

            default:
                return <Index setComponenteAtual = {setComponenteAtual}/>
    }



}



 export default Moeda;