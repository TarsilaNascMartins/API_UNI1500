import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getBanco, saveEdit} from './../../Services/Banco'


function Edit({setComponenteAtual,idBanco}){
    const [name,setName] = useState ("");
    const [conta, setConta] = useState([]);

  const [banco,setBanco] = useState(
    {
        nome: '',
        conta: '',
    }
)

        useEffect(()=> {

                const banco = getBanco(idBanco);
                setName (banco.nome); 
                setConta(banco.conta);
        },[])
        
          const updateBanco = (event)=>{
            const value = event.target.value;
            setBanco(
                {
                    ...banco,
                    [event.target.name]: value
    
                }
            )
        }
            
        
        const create = (event) => {
            event.preventDefault();
            const banco = {
                nome: name,
                conta:conta,
          
            }
            saveEdit(idBanco,banco);
            setComponenteAtual("Index");
            console.log(getBanco());
            
            }
            
return(
<p><div className="d-flex flex-column align-items-center">
  
   <Form className="col-3 mt-5">
     <center> <h2>Edição de Banco</h2></center>
    <center> <img src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-doing-handshake-6342536-5230967.png"alt="Image" height= "200" width="200"></img>
     </center><Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Label>Nome Banco</Form.Label>
       <Form.Control value ={name} onChange={(event)=>{updateBanco(event)}}  name='name' type="banco" placeholder="Insira o nome do banco" />
       <Form.Text className="text-muted">
       </Form.Text>

       <Form.Label>Agencia e Conta</Form.Label>
       <Form.Control value ={conta} onChange={(event)=>{updateBanco(event)}} name='conta' type="banco" placeholder="Insira a agência e conta" />
       <Form.Text className="text-muted">
       </Form.Text>
       
     </Form.Group>
     <Button variant="dark"  type="submit" onClick = {(event)=> create (event)}>Enviar</Button>
     <Button variant="success"className='m-2' onClick={()=>{ setComponenteAtual("Index")}}> Voltar </Button>
   </Form></div></p>
);



}

export default Edit;