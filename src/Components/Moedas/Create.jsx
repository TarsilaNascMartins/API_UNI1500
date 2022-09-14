import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {saveMoedas,getMoedas} from './../../Services/Moedas'


function Create( {setComponenteAtual}){

const [paises,moeda] = useState([

{id:1, nome: "Brasil"},
{id:2, nome: "Espanha"},
{id:3, nome: "Argentina"},
{id:4, nome: "Eua"}
])

const [name,setName] = useState ("");

const [paisesSelecionados, setPaisesSelecionados] = useState([]);

const UpdatePaisesSelecionados = (event,pais) =>{
  if(event.target.checked){
  
    setPaisesSelecionados(lastPaisesSelecionados=>[...lastPaisesSelecionados,pais])
    
  }else {

    const newPaises = paisesSelecionados.filter((e)=> e.id !== pais.id);
    setPaisesSelecionados(newPaises);

  }
}

const create = (event) => {
  event.preventDefault();
  const moeda = {
    nome: name,
    paises: paisesSelecionados

  }

saveMoedas(moeda);

setComponenteAtual("Index");

console.log(getMoedas());

}

  return (
   <p>
    <div className="d-flex flex-column align-items-center">
   
    <Form className="col-3 mt-5">
      <center> <h2>Cadastro de Moedas</h2></center>
     <center> <img src="https://www.despachantedok.com.br/assets/images/landingpage/emprestimoGarantiaSeo/ilustracao-carro-documento-moeda.png"alt="Image" height= "150" width="200"></img>
      </center><Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control onChange={((e)=>setName(e.target.value))} name='name' type="moeda" placeholder="Insira o tipo de Moeda" />
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Label>Paises</Form.Label>
        {paises.map((pais) =>
        
        <Form.Check 
            onChange={((event)=> UpdatePaisesSelecionados(event,pais))}

            key={pais.id}
            type= "checkbox"
            id={pais.id}
            label={pais.nome}
            />
      )}
       

      </Form.Group>
      <Button variant="success" type="submit" onClick = {(event)=> create (event)}>Enviar</Button>
      <Button variant="success" onClick={()=>{ setComponenteAtual("Index")}}> Voltar </Button>
    </Form></div></p>
  );

  
}

export default Create;