export const ProjetosKey = 'Projetos';


export const saveProjeto= (projeto)=>{
    let projetos = getProjetos();

    if(!Array.isArray(projetos)){
        projetos=[];
    }

    if(projetos.length ===0){
        projeto.id=1;
    }
    else{
        const maxId = Math.max.apply(Math, projetos.map(function(o) { return o.id; }))
        projeto.id=maxId+1;
    }

    projetos.push(projeto);
    localStorage.setItem(ProjetosKey,JSON.stringify(projetos));

}

export const deleteProjeto = (id) =>{

    const projetos = getProjetos();
 
     const newProjetos = projetos.filter((projeto)=> projeto.id!==id);
     localStorage.setItem(ProjetosKey, JSON.stringify(newProjetos))
 

 }

export const getProjetos = ()=>{

    let projetos = JSON.parse(localStorage.getItem(ProjetosKey));

    if(typeof projetos === 'undefined' || projetos === null){
        return []
    }

    return projetos;
}

export const getProjeto = (id)=>{

    let projeto = getProjetos();

    // === => obter igualdade do valor e do tipo 
    return projeto.find((projeto)=> projeto.id === id);


}

export const saveEdit = (id,projeto,cliente) =>{
    const projetos = getProjetos();

    const projetosIndex = projetos.findIndex((projetosToEdit)=>projetosToEdit.id===id);

    projetos[projetosIndex].nome = projeto.nome;
    projetos[projetosIndex].data = projeto.data;
    projetos[projetosIndex].responsavel = projeto.responsavel;
    projetos[projetosIndex].cpf= cliente.cpf;
    
    localStorage.setItem(ProjetosKey,JSON.stringify(projetos))
}