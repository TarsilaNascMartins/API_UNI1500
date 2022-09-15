import Create from "../Components/ContasContabeis/Create";
import {useState} from 'react'
import Index from "../Components/ContasContabeis/Index";

function ContasContabeis(){
const [componenteAtual, setComponenteAtual] = useState("Index");
const [setContaContabilEdit] = useState(0);

switch (componenteAtual){

case"Index":
 return <Index setComponenteAtual ={setComponenteAtual} setContaContabilEdit = {setContaContabilEdit}/>
    
 case "Create":
    return<Create setComponenteAtual ={setComponenteAtual}/>

 
    default:
        return <Index setComponenteAtual = {setComponenteAtual}/> 
}


}

export default ContasContabeis;