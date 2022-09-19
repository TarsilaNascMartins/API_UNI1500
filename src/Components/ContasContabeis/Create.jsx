import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {saveContasContabeis,getContaContabil} from  './../../Services/ContasContabeis'

function Create({setComponenteAtual}){

  const [name,setName] = useState ("");

  const [nref, setNREF] = useState([]);



const create = (event) => {
  event.preventDefault();
  const contaContabil = {
    nome: name,
    
     nref,

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
       
       <Form.Control onChange={((e)=>setName(e.target.value))} name='name' type="contaContabil" placeholder="Insira o nome da Conta Contabil" />
       <Form.Text className="text-muted">
       </Form.Text>
       <Form.Control onChange={((e)=>setNREF(e.target.value))} name='nref' type="contaContabil" placeholder="Insira o numero de referência" />
       <Form.Text className="text-muted">
       </Form.Text>
       
     </Form.Group>
     <Button variant="dark"  type="submit" onClick = {(event)=> create (event)}>Enviar</Button>
     <Button variant="success"className='m-2' onClick={()=>{ setComponenteAtual("Index")}}> Voltar </Button>
   </Form></div></p>
 );
}

export default Create;