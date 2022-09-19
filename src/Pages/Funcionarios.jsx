import Create from "../Components/Funcionarios/Create"
import Index from "../Components/Funcionarios/Index";
import Edit from "../Components/Funcionarios/Edit";
import {useState} from 'react'

function Funcionarios(){

    const [componenteAtual,setComponenteAtual] = useState("Index");

    const [idFuncionarioEdit,setIdFuncionarioEdit] = useState(0);

    switch (componenteAtual){
    case"Index":
     return <Index setComponenteAtual ={setComponenteAtual} setIdFuncionarioEdit = {setIdFuncionarioEdit}/>
        
     case "Create":
        return<Create setComponenteAtual ={setComponenteAtual}/>

        case "Edit":
            return<Edit setComponenteAtual ={setComponenteAtual} idFuncionario={idFuncionarioEdit}/>
      
            default:
                return <Index setComponenteAtual = {setComponenteAtual}/>
    }



}



 export default Funcionarios;