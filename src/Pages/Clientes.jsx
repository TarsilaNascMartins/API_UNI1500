import Create from "./../Components/Clientes/Create"
import Index from "./../Components/Clientes/Index";
import Edit from "../Components/Clientes/Edit";
import {useState} from 'react'

function Clientes(){

    const [componenteAtual,setComponenteAtual] = useState("Index");

    const [idClienteEdit,setIdClienteEdit] = useState(0);

    switch (componenteAtual){
    case"Index":
     return <Index setComponenteAtual ={setComponenteAtual} setIdClienteEdit = {setIdClienteEdit}/>
        
     case "Create":
        return<Create setComponenteAtual ={setComponenteAtual}/>

        case "Edit":
            return<Edit setComponenteAtual ={setComponenteAtual} idCliente ={idClienteEdit}/>
      
            default:
                return <Index setComponenteAtual = {setComponenteAtual}/>
    }



}



 export default Clientes;