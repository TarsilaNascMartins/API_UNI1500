import { useState } from "react"
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';


function ToDoList(){

const [listToDos,setListTodos] = useState ([

{id: 1, texto: 'Tarefa 1'},
{id: 2, texto: 'Tarefa 2'}

]);

const [texto,setTexto] = useState ("");

function addToList(event){
event.preventDefault();
const newId = listToDos.length + 1;
const newItem = {id: newId,texto};
const newList = listToDos.concat(newItem);

setListTodos(newList);

}

function removeFromList(id){

const newList = listToDos.filter(c => c.id !==id);
setListTodos(newList);

}

return <>

<form onSubmit={(event)=>(addToList(event))}>
  
<center>< input type= "text" size={150}  placeholder="Adicione" onChange={(event)=> {setTexto(event.target.value)}}></input>
<Button variant="primary" input type= "submit" > + </Button></center>


</form>
<ListGroup variant = "flush">
{listToDos.map((item) =>

<ListGroup.Item key={item.id}>{item.texto}
<Button variant = "dark" onClick={()=>(removeFromList (item.id))}>Remover</Button>
</ListGroup.Item>
)

}

</ListGroup>

</>

}

export default ToDoList