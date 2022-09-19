import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getFuncionario, saveEdit} from './../../Services/Funcionarios'


function Edit({setComponenteAtual,idFuncionario}){

    const [name,setName] = useState ("");
    const [cpf, setCPF] = useState([]);
  
  const [funcionario,setFuncionario] = useState(
    {
        nome: '',
        ncpf: '',
    
    }
)
   
        useEffect(()=> {

                const funcionario = getFuncionario(idFuncionario);
                setName (funcionario.nome); 
                setCPF(funcionario.ncpf);
        },[])
        
          const updateFuncionario = (event)=>{
            const value = event.target.value;
            setFuncionario(
                {
                    ...funcionario,
                    [event.target.name]: value
    
                }
            )
        }
            
        
        const create = (event) => {
            event.preventDefault();
            const funcionario = {
                nome: name,
                ncpf: cpf,
          
            }
        
            saveEdit(idFuncionario,funcionario);

            setComponenteAtual("Index");
            
            console.log(getFuncionario());
            
            }
            
return(
<p>
   <div className="d-flex flex-column align-items-center">
  
   <Form className="col-3 mt-5">
     <center> <h2>Edição de Funcionários</h2></center>
    <center> <img src="https://cdn3d.iconscout.com/3d/premium/thumb/id-card-5167945-4319404.png"alt="Image" height= "150" width="150"></img>
     </center><Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Label>Nome Funcionário</Form.Label>
       <Form.Control value= {name} onChange={(event)=>{updateFuncionario(event)}}  name='name' type="funcionario" placeholder="Insira o nome do funcionário" />
       <Form.Text className="text-muted">
       </Form.Text>

       <Form.Label>Número Matrícula</Form.Label>
       <Form.Control value={cpf} onChange={(event)=>{updateFuncionario(event)}}  name='cpf' type="funcionario" placeholder="Insira a matrícula" />
       <Form.Text className="text-muted">
       </Form.Text>
       
     </Form.Group>
     <Button variant="dark"  type="submit" onClick = {(event)=> create (event)}>Enviar</Button>
     <Button variant="success"className='m-2' onClick={()=>{ setComponenteAtual("Index")}}> Voltar </Button>
   </Form></div></p>



);



}

export default Edit;