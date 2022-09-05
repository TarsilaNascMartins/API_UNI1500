function Carro(props) {
    
    const alertInfos = (message,event)=> {
console.log(event);
alert('${message} Nome: ${props.infosCarro.nome}, Ano ${props.infosCarro.ano}')

    }


    return<>
 <h1>Carro</h1>

{typeof props.infosCarros !== "undefined" &&
   <>
    <h1>Nome</h1>
   <h2>{props.infosCarros.nome}</h2>
    <h1>Ano</h1>
    <h2>{props.infosCarros.ano}</h2>
   <button onClick={(event)=> {{alertInfos('Olá as informações são: ', event)}}}> Visualizar informações</button>

</>
}
</>
     
}

export default Carro;