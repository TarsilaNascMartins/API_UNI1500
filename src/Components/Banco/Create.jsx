import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {saveBancos, getBancos} from  './../../Services/Banco'

function Create({setComponenteAtual}){

  const [name,setName] = useState ("");
  const [conta, setConta] = useState([]);

const create = (event) => {
  event.preventDefault();
  const banco = {
    nome: name,
    conta,
  }
saveBancos(banco);
setComponenteAtual("Index");
console.log(getBancos());

}


return (
  <p><div className="d-flex flex-column align-items-center">
     <Form className="col-3 mt-5">
     <center> <h2>Cadastro de Bancos</h2></center>
    <center> <img src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-doing-handshake-6342536-5230967.png"alt="Image" height= "200" width="200"></img>
     </center><Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Label>Nome do Banco</Form.Label>
       <Form.Control  onChange={((e)=>setName(e.target.value))}  name='name' type="banco" placeholder="Insira o nome do banco" />
       <Form.Text className="text-muted">
       </Form.Text>

       <Form.Label>CPF</Form.Label>
       <Form.Control  onChange={((e)=>setConta(e.target.value))} name='conta' type="banco" placeholder="Insira a agência e a conta" />
       <Form.Text className="text-muted">
       </Form.Text>

       </Form.Group>
     <Button variant="dark"  type="submit" onClick = {(event)=> create (event)}>Enviar</Button>
     <Button variant="success"className='m-2' onClick={()=>{ setComponenteAtual("Index")}}>Voltar</Button>
   </Form></div></p>
 );
}

export default Create;