import Create from "../Components/ContasContabeis/Create";
import {useState} from 'react'
import Index from "../Components/ContasContabeis/Index";
import Edit from "../Components/ContasContabeis/Edit";

function ContasContabeis(){
const [componenteAtual, setComponenteAtual] = useState("Index");
const [idContaContabilEdit, setContaContabilEdit] = useState(0);

switch (componenteAtual){

case"Index":
 return <Index setComponenteAtual ={setComponenteAtual} setContaContabilEdit = {setContaContabilEdit}/>
    
 case "Create":
    return<Create setComponenteAtual ={setComponenteAtual}/>

    case "Edit":
            return< Edit setComponenteAtual ={setComponenteAtual} idContaContabil = {idContaContabilEdit}/>
 
    default:
        return <Index setComponenteAtual = {setComponenteAtual}/> 
}


}

export default ContasContabeis;