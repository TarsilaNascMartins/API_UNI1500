import Create from '../Components/Transacoes/Create'
import Index from "./../Components/Transacoes/Index";
import { useState } from 'react';
import Report from "./../Components/Transacoes/Report"
import Edit from "./../Components/Transacoes/Edit"
function Transacoes(){



    const [componenteAtual,setComponenteAtual] = useState("Index");

    const [idTransacaoEdit,setIdTransacaoEdit] = useState(0);

    switch (componenteAtual){
        case"Index":
         return <Index setComponenteAtual ={setComponenteAtual} setIdTransacaoEdit = {setIdTransacaoEdit}/>
            
         case "Create":
            return<Create setComponenteAtual ={setComponenteAtual}/>

            case "Report":
                return<Report setComponenteAtual ={setComponenteAtual}/>

                case "Edit":
                return<Edit setComponenteAtual={setComponenteAtual} idTransacao={idTransacaoEdit}/>
          
                default:
                    return <Index setComponenteAtual = {setComponenteAtual}/>
        }
}

export default Transacoes;