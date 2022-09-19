
import {getClientes, deleteCliente} from './../../Services/Clientes'
import{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import{Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';


function Index({setComponenteAtual,setIdClienteEdit}){

    const [clientes,setClientes] = useState([]);
    const [isLoading,setIsLoading]= useState(true);

    useEffect(() =>  {
        setClientes(getClientes());
        setIsLoading(false);
    }
    , [])

    const removeCliente = (id)=>{
            deleteCliente(id);
            setClientes(getClientes());
    }

    const setToEdit=(idCliente)=>{
        setIdClienteEdit(idCliente);
        setComponenteAtual('Edit');
        console.log("edit")
    }





return <div className='m-3'>
<center>
<Row>
  <Col  xs={10} >
    <h1>Clientes</h1> 
</Col>
 <Col>
<Button variant="success" className='mb-2' onClick={()=>{ setComponenteAtual("Create")}}> + Adicionar Cliente </Button>
</Col>
</Row></center>
<div className="d-flex flex-column align-items-center m-3">
<Table striped bordered hover variant='light'>

<thead variant = "dark">
    <tr >
        <td><b>Id</b></td>
        <td><b>Nome</b></td>
        <td><b>CPF</b></td>
        <td><b>Opções</b></td>
    </tr>
</thead>
<tbody>
   {clientes.map((cliente)=>{

      return   <tr key={cliente.key}>
                <td>{cliente.id} </td>
                <td>{cliente.nome} </td>
                <td>{cliente.ncpf} </td>
               <td >
               <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">Opções</Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item  onClick={()=> {removeCliente(cliente.id)}}>Deletar</Dropdown.Item>
          <Dropdown.Item  onClick={()=> {setToEdit(cliente.id)}}>Editar</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
               </td>
        </tr>

   } )

   }

</tbody>
</Table>
</div>
</div>

}

export default Index;