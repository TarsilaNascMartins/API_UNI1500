
import {getMoedas,deleteMoeda} from './../../Services/Moedas'
import{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import{Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';


function Index({setComponenteAtual,setIdMoedaEdit}){

    const [moedas,setMoedas] = useState([]);
    const [isLoading,setIsLoading]= useState(true);

    useEffect(() =>  {
        setMoedas(getMoedas());
        setIsLoading(false);
    }
    , [])

    const removeMoeda = (id)=>{
            deleteMoeda(id);
            setMoedas(getMoedas());

    }

    const setToEdit=(idMoeda)=>{
        setIdMoedaEdit(idMoeda);
        setComponenteAtual('Edit');
    }


return <div className='m-3'>
<center>
<Row>
  <Col  xs={10} >
    <h1>Moedas</h1> 
</Col>
<Col>
<Button variant="success" className='mb-2' onClick={()=>{ setComponenteAtual("Create")}}> + Criar nova moeda </Button>
</Col>
</Row></center>
<div className="d-flex flex-column align-items-center m-3">
<Table striped bordered hover variant='light'>

<thead variant = "dark">
    <tr >   
        <td><b>Id</b></td>
        <td><b>Nome</b></td>
        <td><b>Paises</b></td>
        <td><b>Opções</b></td>
    </tr>
</thead>

<tbody>
   { !isLoading && moedas.map((moeda)=>{

      return   <tr>
                <td>{moeda.id} </td>
                <td>{moeda.nome}  </td>
                <td>
                    <ul>
                        {moeda.paises.map(
                            (pais)=>{
                          return  <li>{pais.nome}</li>
                        }
                        )}
                    </ul>
               </td>
               <td >
               <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">Opções</Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item  onClick={()=> {removeMoeda(moeda.id)}}>
            Deletar
          </Dropdown.Item>
          <Dropdown.Item  onClick={()=> {setToEdit(moeda.id)}}>Editar</Dropdown.Item>
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