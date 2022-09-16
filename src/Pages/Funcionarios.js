import Create from "./../Components/Funcionarios/Create"
import Index from "./../Components/Funcionarios/Index";

import {useState} from 'react'

function Funcionarios(){

    const [componenteAtual,setComponenteAtual] = useState("Index");

    const [idFuncionarioEdit,setIdFuncionarioEdit] = useState(0);

    switch (componenteAtual){
    case"Index":
     return <Index setComponenteAtual ={setComponenteAtual} setIdClienteEdit = {setIdFuncionarioEdit}/>
        
     case "Create":
        return<Create setComponenteAtual ={setComponenteAtual}/>

      
            default:
                return <Index setComponenteAtual = {setComponenteAtual}/>
    }



}



 export default Funcionarios;