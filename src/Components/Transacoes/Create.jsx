import { useState,useEffect } from 'react';
import { Form,Button } from 'react-bootstrap';
import {getMoedas} from './../../Services/Moedas';
import {getContasContabeis} from './../../Services/ContasContabeis'
import {saveTransacao} from './../../Services/Transacoes'
function Create() {
    const [transacao, setTransacao] = useState(
        {
            data: '',
            valor: 0,
            moedaId: 0,
            contaContabilId: 0,
        }
    )
    const[moedas,setMoedas] = useState([]);
    const[contasContabeis,setContasContabeis] = useState([]);

    useEffect(()=>{
        setMoedas(getMoedas());
        setContasContabeis(getContasContabeis());
    },[])

    const updateTransacao = (event)=>{
        const value = event.target.value;
        setTransacao(
            {
                ...transacao,
                [event.target.name]:value
            }
        )
    }

    const save = (event)=>{
        event.preventDefault();
        saveTransacao(transacao);
    }


    return <div className="d-flex flex-column align-items-center">
        <h1>Cadastro de transação</h1>
        <Form onSubmit={(event)=>save(event)}>
            <Form.Label>Data</Form.Label>
            <Form.Control type="date" name="data" onChange={(event)=>updateTransacao(event)}></Form.Control>
            <Form.Label>Valor</Form.Label>
            <Form.Control type="number" name="valor" onChange={(event)=>updateTransacao(event)}></Form.Control>
            <Form.Label>Moeda</Form.Label>
            <Form.Select name="moedaId" onChange={(event)=>updateTransacao(event)}>
                <option>Selecione uma moeda...</option>
                {
                    moedas.map((moeda)=>{
                        return <option key={moeda.id} value={moeda.id} >
                            {moeda.nome}
                        </option>
                    })
                }
            </Form.Select>
            <Form.Label>Conta contábil</Form.Label>
            <Form.Select name="contaContabilId" onChange={(event)=>updateTransacao(event)}>
                <option>Selecione uma conta contábil...</option>
                {
                    contasContabeis.map((contaContabil)=>{
                        return <option key={contaContabil.id} value={contaContabil.id}>
                            {contaContabil.nome}
                        </option>
                    })
                }

            </Form.Select>
            <Button variant='dark' type='submit'>Enviar</Button>
        </Form>
    </div>


}

export default Create;