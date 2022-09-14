import Create from "../Components/ContasContabeis/Create";
import {useState} from 'react'

function ContasContabeis(){
const [componenteAtual, setComponenteAtual] = useState("Index");
return<>

<Create setComponenteAtual= {setComponenteAtual}/>


</>



}

export default ContasContabeis;