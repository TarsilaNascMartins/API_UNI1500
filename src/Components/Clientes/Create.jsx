import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {saveClientes,getClientes} from  './../../Services/Clientes'

function Create({setComponenteAtual}){

  const [name,setName] = useState ("");
  const [cpf, setCPF] = useState([]);
  

const create = (event) => {
  event.preventDefault();
  const cliente = {
    nome: name,
    ncpf: cpf,

  }

saveClientes(cliente);

setComponenteAtual("Index");

console.log(getClientes());

}




return (
  <p>
   <div className="d-flex flex-column align-items-center">
  
   <Form className="col-3 mt-5">
     <center> <h2>Cadastro de Clientes</h2></center>
    <center> <img src="https://cdn-icons-png.flaticon.com/512/3126/3126589.png"alt="Image" height= "150" width="150"></img>
     </center><Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Label>Nome Cliente</Form.Label>
       <Form.Control  onChange={((e)=>setName(e.target.value))}  name='name' type="cliente" placeholder="Insira o nome do cliente" />
       <Form.Text className="text-muted">
       </Form.Text>

       <Form.Label>CPF</Form.Label>
       <Form.Control  onChange={((e)=>setCPF(e.target.value))} name='cpf' type="cliente" placeholder="Insira o cpf" />
       <Form.Text className="text-muted">
       </Form.Text>
       
     </Form.Group>
     <Button variant="dark"  type="submit" onClick = {(event)=> create (event)}>Enviar</Button>
     <Button variant="success"className='m-2' onClick={()=>{ setComponenteAtual("Index")}}> Voltar </Button>
   </Form></div></p>
 );
}

export default Create;