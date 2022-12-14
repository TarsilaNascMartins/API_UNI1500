import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getContaContabil, saveEdit} from './../../Services/ContasContabeis'




function Edit({setComponenteAtual,idContaContabil}){

  
  const [contaContabil,setContaContabil] = useState(
    {
        nome:'',
        nref:'',
    }
)
  

//RETORNANDO OS VALORES QUE ESTAVAM DEFINIDOS
//usado para quando um estado é alterado, randerizado
        useEffect(()=> {

                setContaContabil(getContaContabil(idContaContabil)) ;
              
        },[])
     
      
        
          const updateContaContabil = (event)=>{
            const value = event.target.value;
            setContaContabil(
                {
                    ...contaContabil,
                    [event.target.name]: value
    
                }
            )
        }
            
        
        const create = (event) => {
            event.preventDefault();
                 
            saveEdit(idContaContabil,contaContabil);

            setComponenteAtual("Index");
            
            console.log(getContaContabil());
            
            }


            
        
          return (
            <p>
             <div className="d-flex flex-column align-items-center">
            
             <Form className="col-3 mt-5">
               <center> <h2>Edição Conta Contabeis</h2></center>
              <center> <img src="https://edufinance.com.br/wp-content/uploads/2020/10/moeda.png"alt="Image" height= "150" width="200"></img>
               </center><Form.Group className="mb-3" controlId="formBasicEmail">
                 
                 <Form.Control defaultValue= {contaContabil.nome} onChange={(event)=>{updateContaContabil(event)}} name='nome' type="contaContabil" placeholder="Insira o nome da Conta Contabil" />
                 <Form.Text className="text-muted">
                 </Form.Text>

                 <Form.Control defaultValue = {contaContabil.nref} onChange={(event)=>{updateContaContabil(event)}} name='nref' type="contaContabil" placeholder="Insira o numero de referência" />
                 <Form.Text className="text-muted">
                 </Form.Text>
                 
                 
                
          
               </Form.Group>
               <Button variant="dark"  type="submit" onClick = {(event)=> create (event)}>Enviar</Button>
               <Button variant="success"className='m-2' onClick={()=>{ setComponenteAtual("Index")}}> Voltar </Button>
             </Form></div></p>
           );
          










}

export default Edit;