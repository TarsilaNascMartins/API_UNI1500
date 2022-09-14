 import Create from "./../Components/Moedas/Create"
import Index from "./../Components/Moedas/Index";
import Edit from "./../Components/Moedas/Edit";
import {useState} from 'react'
function Moeda(){

    const [componenteAtual,setComponenteAtual] = useState("Index");

    const [idMoedaEdit,setIdMoedaEdit] = useState(0);

    switch (componenteAtual){
    case"Index":
     return <Index setComponenteAtual ={setComponenteAtual} setIdMoedaEdit = {setIdMoedaEdit}/>
        
     case "Create":
        return<Create setComponenteAtual ={setComponenteAtual}/>

        case "Edit":
            return< Edit setComponenteAtual ={setComponenteAtual} idMoeda = {idMoedaEdit}/>

            default:
                return <Index setComponenteAtual = {setComponenteAtual}/>
    }



}



 export default Moeda;