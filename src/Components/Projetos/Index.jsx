import { useEffect } from 'react';
import {useState} from 'react';
import{getProjetos,deleteProjeto} from "./../../Services/Projetos"
import Table from 'react-bootstrap/Table';
import{Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';



function Index({setComponenteAtual, setProjetoEdit}){

const [projetos, setProjetos] = useState([]);

useEffect(()=>{
setProjetos(getProjetos())

},[])


const removeProjeto = (id)=>{
    deleteProjeto(id);
    setProjetos(getProjetos());

}

const setToEdit= (idProjeto)=>{
    setProjetoEdit(idProjeto);
    setComponenteAtual("Edit")

}


return <div className='m-3'>
<center>
<Row>
  <Col  xs={10} >
    <h1>Projetos</h1> 
</Col>
 <Col>
<Button variant="success" className='mb-2' onClick={()=>{ setComponenteAtual("Create")}}> + Adicionar Projeto </Button>
</Col>
</Row></center>
<div className="d-flex flex-column align-items-center m-3">
<Table striped bordered hover variant='light'>

<thead variant = "dark">
    <tr >
        <td><b>Id</b></td>
        <td><b>Nome Projeto</b></td>
        <td><b>Data</b></td>
        <td><b>Responsavel</b></td>
        <td><b>Nome do cliente</b></td>
        <td><b>Opções</b></td>
    </tr>
</thead>
<tbody>
   {
        projetos.map((projeto)=>{
                    
            return <tr key = {projeto.id}>
            <td>{projeto.id} </td>
            <td>{projeto.nome} </td>
            <td>{projeto.data} </td>
            <td>{projeto.responsavel} </td>
            <td>{projeto.cpf} </td>
            <td>
                
        <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">Opções</Dropdown.Toggle>
         <Dropdown.Menu variant="dark">
        <Dropdown.Item onClick={()=> {removeProjeto(projeto.id)} }>Deletar</Dropdown.Item>
        <Dropdown.Item onClick={()=> {setToEdit(projeto.id)}}>Editar</Dropdown.Item>
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