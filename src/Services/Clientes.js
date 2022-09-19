export const clienteKey = "clientes"

export const saveClientes = (cliente) =>{

    let clientes = getClientes();

    if (!Array.isArray(clientes)){
        clientes = [];
    }

    if(clientes.length== 0){
        cliente.id = 1;
    
    }else {

    const maxId = Math.max.apply(Math, clientes.map(function(o){return o.id; }))

      cliente.id=maxId+1;
    
    }

clientes.push(cliente);
localStorage.setItem(clienteKey, JSON.stringify(clientes))
}


export const deleteCliente = (id) =>{

   const clientes = getClientes();

    const newClientes = clientes.filter((moeda)=> moeda.id!==id);
    localStorage.setItem(clienteKey, JSON.stringify(newClientes))



}

export const getCliente = (id)=>{

    let clientes = getClientes();

    // === => obter igualdade do valor e do tipo 
    return clientes.find((cliente)=> cliente.id === id);


}




export const getClientes = () =>{

let clientes = JSON.parse(localStorage.getItem(clienteKey))

if(typeof clientes == 'undefined' || clientes === null){
    return []
}

    return clientes
}

export const saveEdit = (id,cliente) =>{
        const clientes = getClientes();

        const clienteIndex = clientes.findIndex((clienteToEdit)=>clienteToEdit.id===id);

        clientes[clienteIndex].nome = cliente.nome;
        clientes[clienteIndex].cpf = cliente.cpf;
        localStorage.setItem(clienteKey,JSON.stringify(clientes))
}