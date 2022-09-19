import Create from "./../Components/Banco/Create"
import Index from "./../Components/Banco/Index";
import Edit from "../Components/Banco/Edit";
import {useState} from 'react'

function Banco(){

    const [componenteAtual,setComponenteAtual] = useState("Index");

    const [idBancoEdit,setIdBancoEdit] = useState(0);

    switch (componenteAtual){
    case"Index":
     return <Index setComponenteAtual ={setComponenteAtual} setIdBancoEdit = {setIdBancoEdit}/>
        
     case "Create":
        return<Create setComponenteAtual ={setComponenteAtual}/>

        case "Edit":
            return<Edit setComponenteAtual ={setComponenteAtual} idBanco ={idBancoEdit}/>
      
            default:
                return <Index setComponenteAtual = {setComponenteAtual}/>
    }



}



 export default Banco;