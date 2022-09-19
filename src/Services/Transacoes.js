export const TransacoesKey = 'Transacoes';


export const saveTransacao = (transacao)=>{
    let transacoes = getTransacoes();

    if(!Array.isArray(transacoes)){
        transacoes=[];
    }

    if(transacoes.length ===0){
        transacao.id=1;
    }
    else{
        const maxId = Math.max.apply(Math, transacoes.map(function(o) { return o.id; }))
        transacao.id=maxId+1;
    }

    transacoes.push(transacao);
    localStorage.setItem(TransacoesKey,JSON.stringify(transacoes));

}

export const deleteTransacao = (id) =>{

    const transacoes = getTransacoes();
 
     const newTransacoes = transacoes.filter((transacao)=> transacao.id!==id);
     localStorage.setItem(TransacoesKey, JSON.stringify(newTransacoes))
 

 }

export const getTransacoes = ()=>{

    let transacoes = JSON.parse(localStorage.getItem(TransacoesKey));

    if(typeof transacoes === 'undefined' || transacoes === null){
        return []
    }

    return transacoes;
}

export const getTransacao = (id)=>{

    let transacao = getTransacoes();

    // === => obter igualdade do valor e do tipo 
    return transacao.find((transacao)=> transacao.id === id);


}

export const saveEdit = (id,transacao,contaContabil,moeda) =>{
    const transacoes = getTransacoes();

    const transacoesIndex = transacoes.findIndex((transacoesToEdit)=>transacoesToEdit.id===id);

    transacoes[transacoesIndex].data = transacao.data;
    transacoes[transacoesIndex].valor = transacao.valor;
    transacoes[transacoesIndex].moedaId= contaContabil.moedaId;
    transacoes[transacoesIndex].contaContabilId = moeda.contaContabilId
    localStorage.setItem(TransacoesKey,JSON.stringify(transacoes))
}