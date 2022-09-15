export const contasContabeisKey = "contasContabeis"

export const saveContasContabeis = (contaContabeis) =>{

    let contasContabeis = getContasContabeis();

    if (!Array.isArray(contaContabeis)){
        contasContabeis = [];
    }

    if(contaContabeis.length== 0){
        contasContabeis.id = 1;
    
    }else {

    const maxId = Math.max.apply(Math, contaContabeis.map(function(o){return o.id; }))

      contaContabeis.id=maxId+1;
    
    }

contaContabeis.push(contaContabeis);
localStorage.setItem(contasContabeisKey, JSON.stringify(contaContabeis))
}


export const deleteContasContabeis = (id) =>{

   const contaContabeis = getContasContabeis();

    const newContasContabeis = contaContabeis.filter((contaContabel)=> contaContabel.id!==id);
    localStorage.setItem(contasContabeisKey, JSON.stringify(newContasContabeis))

}

export const getContaContabil = (id)=>{

    let contasContabeis = getContasContabeis();

    // === => obter igualdade do valor e do tipo 
    return contasContabeis.find((contaContabil)=> contaContabil.id === id);


}




export const getContasContabeis = () =>{

let contasContabeis = JSON.parse(localStorage.getItem(contasContabeisKey))

if(typeof contasContabeis == 'undefined' || contasContabeis === null){
    return []
}

    return contasContabeis
}

export const saveEdit = (id,contaContabil) =>{
        const contasContabeis = getContasContabeis();

        const contaContabilIndex = contasContabeis.findIndex((contaContabilToEdit)=>contaContabilToEdit.id===id);

        contasContabeis[contaContabilIndex].nome = contaContabil.nome;
        contasContabeis[contaContabilIndex].paises = contaContabil.paises;
        localStorage.setItem(contasContabeisKey,JSON.stringify(contasContabeis))
}