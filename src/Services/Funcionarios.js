export const funcionarioKey = "funcionarios"

export const saveFuncionarios = (funcionario) =>{

    let funcionarios = getFuncionarios();

    if (!Array.isArray(funcionarios)){
        funcionarios = [];
    }

    if(funcionarios.length== 0){
        funcionario.id = 1;
    
    }else {

    const maxId = Math.max.apply(Math, funcionarios.map(function(o){return o.id; }))

      funcionario.id=maxId+1;
    
    }

funcionarios.push(funcionario);
localStorage.setItem(funcionarioKey, JSON.stringify(funcionarios))
}


export const deleteFuncionario = (id) =>{

   const funcionarios = getFuncionarios();

    const newFuncionarios = funcionarios.filter((funcionario)=> funcionario.id!==id);
    localStorage.setItem(funcionarioKey, JSON.stringify(newFuncionarios))



}

export const getFuncionario = (id)=>{

    let funcionarios = getFuncionarios();

    // === => obter igualdade do valor e do tipo 
    return funcionarios.find((funcionario)=> funcionario.id === id);


}




export const getFuncionarios = () =>{

let funcionarios = JSON.parse(localStorage.getItem(funcionarioKey))

if(typeof funcionarios == 'undefined' || funcionarios === null){
    return []
}

    return funcionarios
}

export const saveEdit = (id,funcionario) =>{
        const funcionarios = getFuncionarios();

        const funcionarioIndex = funcionarios.findIndex((funcionarioToEdit)=>funcionarioToEdit.id===id);

        funcionarios[funcionarioIndex].name = funcionario.name;
        funcionarios[funcionarioIndex].cpf = funcionario.cpf;
        localStorage.setItem(funcionarioKey,JSON.stringify(funcionarios))
}