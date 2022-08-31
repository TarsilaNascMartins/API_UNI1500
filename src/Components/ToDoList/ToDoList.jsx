import { useState } from "react"

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
<input type= "text" onChange={(event)=> {setTexto(event.target.value)}}></input>
<input type= "submit"></input>
</form>

<ul>
{listToDos.map((item) =>

<li key={item.id}>{item.texto}
<button onClick={()=>(removeFromList (item.id))}>Remover</button>
</li>
)

}

</ul>

</>

}

export default ToDoList