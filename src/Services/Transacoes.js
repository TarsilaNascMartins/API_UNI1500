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

export const getTransacoes = ()=>{

    let transacoes = JSON.parse(localStorage.getItem(TransacoesKey));

    if(typeof transacoes === 'undefined' || transacoes === null){
        return []
    }

    return transacoes;
}