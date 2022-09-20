import { useState,useEffect } from 'react';
import { Form,Button } from 'react-bootstrap';
import {getClientes} from './../../Services/Clientes'
import {saveProjeto} from './../../Services/Projetos'

function Create({setComponenteAtual}) {
    const [projeto, setProjeto] = useState(
        {
            nome: '',
            data: '',
            responsavel: '',
            cpf: 0,
        }
    )

    const[clientes,setClientes] = useState([]);
    useEffect(()=>{
        setClientes(getClientes());
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
        saveProjeto(projeto);
        setComponenteAtual('Index');
    }


    return <div className="d-flex flex-column align-items-center">
        <p></p>
        <h2>Cadastro de Projetos</h2>
        <center> <img src="https://cdn3d.iconscout.com/3d/premium/thumb/tax-form-5926088-4897886.png"alt="Image" height= "150" width="150"></img></center>
        <Form onSubmit={(event)=>save(event)}>
            <Form.Label>Nome Projeto</Form.Label>
            <Form.Control type="name" name="nome" onChange={(event)=>updateProjeto(event)}></Form.Control>
           
            <Form.Label>Data</Form.Label>
            <Form.Control type="date" name="data" onChange={(event)=>updateProjeto(event)}></Form.Control>

            <Form.Label>Nome Projeto</Form.Label>
            <Form.Control type="name" name="responsavel" onChange={(event)=>updateProjeto(event)}></Form.Control>

            <Form.Label>Cliente</Form.Label>
            <Form.Select name="cpf" value = {projeto.cpf} onChange={(event)=>updateProjeto(event)}>
                <option>Selecione o nome do cliente...</option>
                {
                    clientes.map((cliente)=>{
                        return <option
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

export default Create;