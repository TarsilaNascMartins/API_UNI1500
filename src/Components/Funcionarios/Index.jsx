import { getFuncionarios, deleteFuncionario} from './../../Services/Funcionarios'
import{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import{Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';


function Index({setComponenteAtual,setFuncionarioEdit}){

    const [funcionarios,setFuncionarios] = useState([]);
    const [isLoading,setIsLoading]= useState(true);

    useEffect(() =>  {
        setFuncionarios(getFuncionarios());
        setIsLoading(false);
    }
    , [])

    const removeFuncionario = (id)=>{
            deleteFuncionario(id);
            setFuncionarios(getFuncionarios());
    }

    const setToEdit=(idFuncionario)=>{
        setFuncionarioEdit(idFuncionario);
        setComponenteAtual('Edit');
    }





return <div className='m-3'>
<center>
<Row>
  <Col  xs={10} >
    <h1>Funcionários</h1> 
</Col>
 <Col>
<Button variant="success" className='mb-2' onClick={()=>{ setComponenteAtual("Create")}}> + Adicionar Funcionário </Button>
</Col>
</Row></center>
<div className="d-flex flex-column align-items-center m-3">
<Table striped bordered hover variant='light'>

<thead variant = "dark">
    <tr >
        <td><b>Id</b></td>
        <td><b>Nome</b></td>
        <td><b>Número de Matrícula</b></td>
        <td><b>Opções</b></td>
    </tr>
</thead>
<tbody>
   {funcionarios.map((funcionario)=>{

      return   <tr key={funcionario.key}>
                <td>{funcionario.id} </td>
                <td>{funcionario.nome} </td>
                <td>{funcionario.ncpf} </td>
               <td >
               <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">Opções</Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item  onClick={()=> {removeFuncionario(funcionario.id)}}>Deletar</Dropdown.Item>
          <Dropdown.Item  onClick={()=> {setToEdit(funcionario.id)}}>Editar</Dropdown.Item>
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