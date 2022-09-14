import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getMoeda, saveEdit} from './../../Services/Moedas'


function Edit({setComponenteAtual,idMoeda}){

    const [paises,setPaises] = useState([

        {id:1, nome: "Brasil"},
        {id:2, nome: "Espanha"},
        {id:3, nome: "Argentina"},
        {id:4, nome: "Eua"}
        ])
        
        const [name,setName] = useState ("");
        
        const [paisesSelecionados, setPaisesSelecionados] = useState([]);

    

//RETORNANDO OS VALORES QUE ESTAVAM DEFINIDOS
//usado para quando um estado é alterado, randerizado
        useEffect(()=> {

                const moeda = getMoeda(idMoeda);
                setName (moeda.nome); //NOME DA MOEDA ANTERIOR
                setPaisesSelecionados(moeda.paises);// NOME DOS PAISES DO ID CORRESPONDENTE
        },[])
        // recebe um array vazio, onde só executa uma vez, ou seja quando o componente carrega


        
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
        
        saveEdit(idMoeda,moeda);
        
        setComponenteAtual("Index");
        
        console.log(getMoeda());
        
        }
        
          return (
           <p>
            <div className="d-flex flex-column align-items-center">
           
            <Form className="col-3 mt-5">
              <center> <h2>Edição de Moedas</h2></center>
             <center> <img src="https://edufinance.com.br/wp-content/uploads/2020/10/moeda.png"alt="Image" height= "150" width="200"></img>
              </center><Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control onChange={((e)=>setName(e.target.value))} name='name' value={name} type="moeda" placeholder="Insira o tipo de Moeda" />
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
                    checked={paisesSelecionados.filter((paisesSelecionados)=>paisesSelecionados.id==pais.id).length>0}
                    />
              )}
               
        
              </Form.Group>
              <Button variant="dark" type="submit" onClick = {(event)=> create (event)}>Enviar</Button>
              <Button variant="success" className='m-2' onClick={()=>{ setComponenteAtual("Index")}}> Voltar </Button>
            </Form></div></p>
          );
        
          










}

export default Edit;