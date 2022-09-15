

import {deleteContasContabeis,getContasContabeis} from './../../Services/ContasContabeis'
import{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import{Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';


function Index({setComponenteAtual,setContaContabilEdit}){

    const [contaContabeis,setContasContabeis] = useState([]);
    const [isLoading, setIsLoading]= useState(true);

    useEffect(() =>  {
        setContasContabeis(getContasContabeis());
        setIsLoading(false);
    }
    , [])

    const removeContaContabil = (id)=>{

        deleteContasContabeis(id);
        setContasContabeis(getContasContabeis());

}


const setToEdit=(idContaContabil)=>{


    setContaContabilEdit(idContaContabil);
    setComponenteAtual('Edit');

}

    return <div className='m-3'>
    <center>
    <Row>
      <Col  xs={10} >
        <h1>Contas Contabeis</h1> 
    </Col>
    
    
         <Col>
    <Button variant="success" className='mb-2' onClick={()=>{ setComponenteAtual("Create")}}> + Criar nova Conta </Button>
    </Col>
    </Row></center>
    <div className="d-flex flex-column align-items-center m-3">
    <Table striped bordered hover variant='light'>
    
    <thead variant = "dark">
    
        <tr >
           
            <td><b>Id</b></td>
            <td><b>Nome</b></td>
            <td><b>NREF</b></td>
            <td><b>Opções</b></td>
        
    
        </tr>
    
        
    </thead>
    <tbody>
       {contaContabeis.map((contaContabeis)=>{
    
          return   <tr key={contaContabeis.key}>
                    <td>{contaContabeis.id} </td>
                    <td>{contaContabeis.nome} </td>
                    <td>{contaContabeis.nRef} </td>
                   <td >
                   <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">Opções</Dropdown.Toggle>
    
            <Dropdown.Menu variant="dark">
              <Dropdown.Item  onClick={()=> {removeContaContabil(contaContabeis.id)}}>Deletar</Dropdown.Item>
              <Dropdown.Item  onClick={()=> {setToEdit(contaContabeis.id)}}>Editar</Dropdown.Item>
              
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