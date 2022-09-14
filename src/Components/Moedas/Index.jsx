
import {getMoedas,deleteMoeda} from './../../Services/Moedas'
import{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import{Button} from 'react-bootstrap';

function Index({setComponenteAtual}){

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

return <div className="d-flex flex-column align-items-center m-3">
<h1>Moedas</h1>
<Button variant="success" className='mb-2' onClick={()=>{ setComponenteAtual("Create")}}> Criar nova moeda </Button>
<Table striped bordered hover variant='secondary'>

<thead variant = "dark">

    <tr >
        <td>Id</td>
        <td> Nome</td>
        <td>Paises</td>
        <td>Opções</td>
       

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
               <td><Button variant= "danger" onClick={()=> {removeMoeda(moeda.id)}}>Deletar</Button></td>
        </tr>

   } )

   }

</tbody>



</Table>
</div>


}

export default Index;