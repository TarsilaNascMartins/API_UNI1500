export const contasContabeisKey = "contasContabeis"

export const saveContasContabeis = (contaContabeis) =>{

    let contasContabeis = getContasContabeis();

    if (!Array.isArray(contasContabeis)){
        contasContabeis = [];
    }

    if(contasContabeis.length== 0){
        contaContabeis.id = 1;
    
    }else {

    const maxId = Math.max.apply(Math, contasContabeis.map(function(o){return o.id; }))

      contaContabeis.id=maxId+1;
    
    }

contasContabeis.push(contaContabeis);
localStorage.setItem(contasContabeisKey, JSON.stringify(contasContabeis))
}


export const deleteContasContabeis = (id) =>{

   const contasContabeis = getContasContabeis();

    const newContasContabeis = contasContabeis.filter((contaContabeis)=> contaContabeis.id!==id);
    localStorage.setItem(contasContabeisKey, JSON.stringify(newContasContabeis))

}

export const getContaContabil = (id)=>{

    let contaContabeis = getContasContabeis();

    // === => obter igualdade do valor e do tipo 
    return contaContabeis.find((contaContabeis)=> contaContabeis.id === id);


}




export const getContasContabeis = () =>{

let contasContabeis = JSON.parse(localStorage.getItem(contasContabeisKey))

if(typeof contasContabeis == 'undefined' || contasContabeis === null){
    return []
}

    return contasContabeis
}

export const saveEdit = (id,contaContabeis) =>{
        const contasContabeis = getContasContabeis();

        const contaContabilIndex = contasContabeis.findIndex((contaContabilToEdit)=>contaContabilToEdit.id===id);

        contasContabeis[contaContabilIndex].nome = contaContabeis.nome;
        contasContabeis[contaContabilIndex].nref = contaContabeis.nref;
        localStorage.setItem(contasContabeisKey,JSON.stringify(contasContabeis))
}