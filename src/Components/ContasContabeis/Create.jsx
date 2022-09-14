import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Create({setComponenteAtual}){


return <>

<div className="d-flex flex-column align-items-center">
   
    <Form className="col-3 mt-5">

      <center> <h2>Cadastro de Contas Contabeis</h2></center>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Label>Nome</Form.Label>
        <Form.Control placeholder="Insira o nome"/>

        <Form.Label>Numero de referencia</Form.Label>
        <Form.Control placeholder="Insira o numero de referencia"/>  

      </Form.Group>

      <Button variant="dark">Enviar</Button>
      <Button variant="success" className='m-2' onClick = {()=> setComponenteAtual ("Index")}>Voltar</Button>
    </Form></div>

</>

}

export default Create;