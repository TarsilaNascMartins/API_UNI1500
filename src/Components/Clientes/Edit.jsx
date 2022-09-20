import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getCliente, saveEdit} from './../../Services/Clientes'


function Edit({setComponenteAtual,idCliente}){


  
  const [cliente,setCliente] = useState(
    {
        nome: '',
        ncpf: '',
    
    }
)
   
        useEffect(()=> {

                setCliente(getCliente(idCliente));
        },[])
        
          const updateCliente = (event)=>{
            const value = event.target.value;
            setCliente(
                {
                    ...cliente,
                    [event.target.name]: value
    
                }
            )
        }
            
        
        const create = (event) => {
            event.preventDefault();
        
            saveEdit(idCliente,cliente);

            setComponenteAtual("Index");
            
            console.log(getCliente());
            
            }
            
return(
<p>
   <div className="d-flex flex-column align-items-center">
  
   <Form className="col-3 mt-5">
     <center> <h2>Edição de Clientes</h2></center>
    <center> <img src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-doing-handshake-6342536-5230967.png"alt="Image" height= "200" width="200"></img>
     </center><Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Label>Nome Cliente</Form.Label>
       <Form.Control defaultValue ={cliente.nome} onChange={(event)=>{updateCliente(event)}}  name='nome' type="cliente" placeholder="Insira o nome do cliente" />
       <Form.Text className="text-muted">
       </Form.Text>

       <Form.Label>CPF</Form.Label>
       <Form.Control defaultValue ={cliente.ncpf} onChange={(event)=>{updateCliente(event)}} name='ncpf' type="cliente" placeholder="Insira o cpf" />
       <Form.Text className="text-muted">
       </Form.Text>
       
     </Form.Group>
     <Button variant="dark"  type="submit" onClick = {(event)=> create (event)}>Enviar</Button>
     <Button variant="success"className='m-2' onClick={()=>{ setComponenteAtual("Index")}}> Voltar </Button>
   </Form></div></p>
);



}

export default Edit;