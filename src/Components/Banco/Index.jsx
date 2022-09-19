
import {getBancos, deleteBanco} from './../../Services/Banco'
import{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import{Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

function Index({setComponenteAtual,setIdBancoEdit}){

    const [bancos,setBancos] = useState([]);
    const [isLoading,setIsLoading]= useState(true);

    useEffect(() =>  {
        setBancos(getBancos());
        setIsLoading(false);
    }
    , [])

    const removeBanco = (id)=>{
            deleteBanco(id);
            setBancos(getBancos());
    }

    const setToEdit=(idBanco)=>{
        setIdBancoEdit(idBanco);
        setComponenteAtual('Edit');
        console.log("edit")
    }

return <div className='m-3'>
<center>
<Row><Col  xs={10} ><h1>Bancos</h1></Col>
<Col><Button variant="success" className='mb-2' onClick={()=>{ setComponenteAtual("Create")}}> + Adicionar Banco </Button></Col>
</Row></center>
<div className="d-flex flex-column align-items-center m-3">
<Table striped bordered hover variant='light'>
<thead variant = "dark">
    <tr >
        <td><b>Id</b></td>
        <td><b>Nome Banco</b></td>
        <td><b>Agência/Conta</b></td>
        <td><b>Opções</b></td>
    </tr>
</thead>
<tbody>
   {bancos.map((banco)=>{
      return   <tr key={banco.key}>
                <td>{banco.id} </td>
                <td>{banco.nome} </td>
                <td>{banco.conta} </td>
               <td >
               <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">Opções</Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item  onClick={()=> {removeBanco(banco.id)}}>Deletar</Dropdown.Item>
          <Dropdown.Item  onClick={()=> {setToEdit(banco.id)}}>Editar</Dropdown.Item>
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