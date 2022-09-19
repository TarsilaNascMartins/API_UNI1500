export const bancoKey = "bancos"

export const saveBancos = (banco) =>{
    let bancos = getBancos();
    if (!Array.isArray(bancos)){
        bancos = [];
    }
    if(bancos.length== 0){
        banco.id = 1;
    }else {
    const maxId = Math.max.apply(Math, bancos.map(function(o){return o.id; }))
      banco.id=maxId+1;
    }
bancos.push(banco);
localStorage.setItem(bancoKey, JSON.stringify(bancos))
}


export const deleteBanco = (id) =>{
    const bancos = getBancos();
    const newBancos = bancos.filter((moeda)=> moeda.id!==id);
    localStorage.setItem(bancoKey, JSON.stringify(newBancos))
}

export const getBanco = (id)=>{
    let bancos = getBancos();
    return bancos.find((banco)=> banco.id === id);
}

export const getBancos = () =>{
let bancos = JSON.parse(localStorage.getItem(bancoKey))
if(typeof bancos == 'undefined' || bancos === null){
    return []
}
    return bancos
}

export const saveEdit = (id,banco) =>{
        const bancos = getBancos();
        const bancoIndex = bancos.findIndex((bancoToEdit)=>bancoToEdit.id===id);
        bancos[bancoIndex].nome = banco.nome;
        bancos[bancoIndex].conta = banco.conta;
        localStorage.setItem(bancoKey,JSON.stringify(bancos))
}