import { useEffect } from 'react';
import {useState} from 'react';
import{getTransacoes,deleteTransacao} from "./../../Services/Transacoes"
import Table from 'react-bootstrap/Table';
import{Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';



function Index({setComponenteAtual, setIdTransacaoEdit}){

const [transacoes, setTransacoes] = useState([]);

useEffect(()=>{
setTransacoes(getTransacoes())

},[])


const removeTransacao = (id)=>{
    deleteTransacao(id);
    setTransacoes(getTransacoes());

}

const setToEdit= (idTransacao)=>{
    setIdTransacaoEdit(idTransacao);
    setComponenteAtual("Edit")

}


return <div className='m-3'>
<center>
<Row>
  <Col  xs={10} >
    <h1>Transações</h1> 
</Col>
 <Col>
<Button variant="success" className='mb-2' onClick={()=>{ setComponenteAtual("Create")}}> + Adicionar Transação </Button>
<Button variant="success" className='mb-2' onClick={()=>{ setComponenteAtual("Report")}}> Visualizar relatório </Button>
</Col>
</Row></center>
<div className="d-flex flex-column align-items-center m-3">
<Table striped bordered hover variant='light'>

<thead variant = "dark">
    <tr >
        <td><b>Id</b></td>
        <td><b>Valor</b></td>
        <td><b>Data</b></td>
        <td><b>Opções</b></td>
    </tr>
</thead>
<tbody>
   {
        transacoes.map((transacao)=>{
                    
            return <tr key = {transacao.id}>
            <td>{transacao.id} </td>
            <td>{transacao.valor} </td>
            <td>{transacao.data} </td>
            <td>
                
        <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">Opções</Dropdown.Toggle>
         <Dropdown.Menu variant="dark">
        <Dropdown.Item onClick={()=> {removeTransacao(transacao.id)} }>Deletar</Dropdown.Item>
        <Dropdown.Item onClick={()=> {setToEdit(transacao.id)}}>Editar</Dropdown.Item>
         </Dropdown.Menu>
         </Dropdown>
                </td> </tr>

        })

   }

</tbody>
</Table>
</div>
</div>
}

export default Index;