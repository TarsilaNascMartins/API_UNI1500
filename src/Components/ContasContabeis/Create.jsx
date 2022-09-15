import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {saveContasContabeis,getContaContabil} from  './../../Services/ContasContabeis'

function Create({setComponenteAtual}){

  const [name,setName] = useState ("");

  const [nRef, setNREF] = useState([]);


const [contaContabil, setContaContabil] = useState({

nome:'',
nRef:'',

})

const updateContaContabil = (event,contaContabil) =>{

const value = event.target.value;

setContaContabil(
  {
    ...contaContabil,
    [event.target.name] : value
  }
)

}


const save = (event) =>
{
  event.preventDefault();
  saveContasContabeis(contaContabil);
  setComponenteAtual('Index');
}

const create = (event) => {
  event.preventDefault();
  const contaContabil = {
    nome: name,
    nRef: nRef,

  }

saveContasContabeis(contaContabil);

setComponenteAtual("Index");

console.log(getContaContabil());

}













return (
  <p>
   <div className="d-flex flex-column align-items-center">
  
   <Form className="col-3 mt-5">
     <center> <h2>Cadastro Conta Contabeis</h2></center>
    <center> <img src="https://edufinance.com.br/wp-content/uploads/2020/10/moeda.png"alt="Image" height= "150" width="200"></img>
     </center><Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control onChange={((e)=>setName(e.target.value))} name='name' type="contaContabil" placeholder="Insira o tipo de Moeda" />
       <Form.Text className="text-muted">
       </Form.Text>
       <Form.Label>Paises</Form.Label>
      
       
       
      

     </Form.Group>
     <Button variant="dark"  type="submit" onClick = {(event)=> create (event)}>Enviar</Button>
     <Button variant="success"className='m-2' onClick={()=>{ setComponenteAtual("Index")}}> Voltar </Button>
   </Form></div></p>
 );
}

export default Create;