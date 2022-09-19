import { useState,useEffect } from 'react';
import { Form,Button } from 'react-bootstrap';
import {getProjeto, saveEdit} from './../../Services/Projetos';
import {getClientes} from './../../Services/Clientes';



function Edit({setComponenteAtual,idProjeto}){
    const[clientes,setClientes] = useState([]);
   
    const [nome, setNome] = useState([]);
    const [data,setData] = useState ("");
    const [responsavel,setResponsavel] = useState ("");
    const [cpf,setCpf] = useState ("");
  
    const [projeto, setProjeto] = useState(
        {
            nome: '',
            data: '',
            responsavel: '',
            cpf: 0,
        }
    )


    useEffect(()=>{
     
        const clientes = setClientes(getClientes());
        const projeto = getProjeto(idProjeto);
                setData (projeto.data);
                setNome(projeto.nome);
                setResponsavel(projeto.responsavel);
                setCpf(projeto.cpf)
           
        },[])

      

    const updateProjeto = (event)=>{
        const value = event.target.value;
        setProjeto(
            {
                ...projeto,
                [event.target.name]:value
            }
        )
    }

    const save = (event)=>{
        event.preventDefault();

        const projeto = {
         nome,
         data,
         responsavel,
         cpf
          }
      
        saveEdit(idProjeto,projeto);
     
        setComponenteAtual('Index');
        console.log(getProjeto());
    }


    return <div className="d-flex flex-column align-items-center">
    <p></p>
    <h2>Cadastro de Projetos</h2>
    <center> <img src="https://cdn3d.iconscout.com/3d/premium/thumb/budget-calculation-4899105-4081253.png"alt="Image" height= "150" width="150"></img></center>
    <Form onSubmit={(event)=>save(event)}>
        <Form.Label>Nome Projeto</Form.Label>
        <Form.Control type="name" value={nome} name="nome" onChange={(event)=>updateProjeto(event)}></Form.Control>
       
        <Form.Label>Data</Form.Label>
        <Form.Control type="date" name="data" value={data} onChange={(event)=>updateProjeto(event)}></Form.Control>

        <Form.Label>Nome Projeto</Form.Label>
        <Form.Control type="name" name="responsavel" value={responsavel} onChange={(event)=>updateProjeto(event)}></Form.Control>

        <Form.Label>Cliente</Form.Label>
        <Form.Select name="cpf" value = {cpf}>
            <option>Selecione o nome do cliente...</option>
            {
                clientes.map((cliente)=>{
                    return <option onChange={(event)=>updateProjeto(event)}
                    key={cliente.id} 
                    type= "checkbox"
                    value={cliente.cpf} >
                        {cliente.nome}
                    </option>
                })
            }
        </Form.Select>
       
        <Button variant='dark' type='submit' className='m-2'>Enviar</Button>
        <Button variant='dark' onClick={()=>setComponenteAtual('Index')} className='m-2'>Voltar</Button>
    </Form>
</div>





}

export default Edit;