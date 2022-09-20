import Create from '../Components/Projetos/Create'
import Index from "./../Components/Projetos/Index";
import Edit from "./../Components/Projetos/Edit"
import { useState } from 'react';



function Projetos(){

    const [componenteAtual,setComponenteAtual] = useState("Index");

    const [idProjetoEdit,setProjetoEdit] = useState(0);

    switch (componenteAtual){
        case"Index":
         return <Index setComponenteAtual ={setComponenteAtual} setProjetoEdit = {setProjetoEdit}/>
            
         case "Create":
            return<Create setComponenteAtual ={setComponenteAtual}/>

                case "Edit":
                return<Edit setComponenteAtual={setComponenteAtual} idProjeto={idProjetoEdit}/>
          
                    default:
                         return <Index setComponenteAtual = {setComponenteAtual}/>
        }
}

export default Projetos;