import { useState,useEffect } from 'react';
import { Form,Button } from 'react-bootstrap';
import {getTransacao, saveEdit} from './../../Services/Transacoes';
import {getMoedas} from './../../Services/Moedas';
import {getContasContabeis} from './../../Services/ContasContabeis'


function Edit({setComponenteAtual,idTransacao}){
    const[moedas,setMoedas] = useState([]);
    const[contasContabeis,setContasContabeis] = useState([]);

    const [data,setData] = useState ("");

    const [valor, setValor] = useState([]);

    const [moedaId,setMoedaId] = useState ("");

    const [contaContabilId,setContaContabilId] = useState ("");
  
    const [transacao, setTransacao] = useState(
        {
            data: '',
            valor: 0,
            moedaId: 0,
            contaContabilId: 0,
        }
    )


    useEffect(()=>{
     
        const moedaId = setMoedas(getMoedas());
        const contaContabilId = setContasContabeis(getContasContabeis());
        const transacao = getTransacao(idTransacao);
                setData (transacao.data); //NOME DA CONTAAA ANTERIOR
                setValor(transacao.valor);// NOME DOS NREF DO ID CORRESPONDENTE
                setMoedaId(transacao.moedaId);
                setContaContabilId(transacao.contaContabilId)
           
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

        const transacao = {
            data,
            valor,
            moedaId,
            contaContabilId,
          }
      
        saveEdit(idTransacao,transacao);
     
        setComponenteAtual('Index');
        console.log(getTransacao());
    }


    return <div className="d-flex flex-column align-items-center">
    <p></p>
    <h2>Edição de transação</h2>
    <center> <img src="https://cdn3d.iconscout.com/3d/premium/thumb/budget-calculation-4899105-4081253.png"alt="Image" height= "150" width="150"></img></center>
    <Form>
        <Form.Label>Data</Form.Label>
        <Form.Control type="date" name="data" value = {data} onChange={(event)=>updateTransacao(event)}></Form.Control>
        <Form.Label>Valor</Form.Label>
        <Form.Control type="number" name="valor" value = {valor}onChange={(event)=>updateTransacao(event)}></Form.Control>
        <Form.Label>Moeda</Form.Label>
        <Form.Select name="moedaId" value = {moedaId} onChange={(event)=>updateTransacao(event)}>
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
        <Form.Select name="contaContabilId" value = {contaContabilId}>
            <option>Selecione uma conta contábil...</option>
            {
                contasContabeis.map((contaContabil)=>{
                    return  <option onChange={(event)=>updateTransacao(event,contaContabil)}
                   key={contaContabil.id} 
                   type= "checkbox"
                    id={contaContabil.id}
                    value={contaContabil.id}>
                        {contaContabil.nome}
                        
                    </option>
                })
            }

        </Form.Select>
        <Button variant='dark' type='submit' className='m-2' onClick = {(event)=> save (event)} >Editar</Button>
        <Button variant='dark' onClick={()=>setComponenteAtual('Index')} className='m-2'>Voltar</Button>
    </Form>
</div>





}

export default Edit;