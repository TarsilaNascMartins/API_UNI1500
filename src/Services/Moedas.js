
export const moedaKey = "moedas"

export const saveMoedas = (moeda) =>{

    let moedas = getMoedas();

    if (!Array.isArray(moedas)){
        moedas = [];
    }

    if(moedas.length== 0){
        moeda.id = 1;
    
    }else {

    const maxId = Math.max.apply(Math, moedas.map(function(o){return o.id; }))

      moeda.id=maxId+1;
    
    }

moedas.push(moeda);
localStorage.setItem(moedaKey, JSON.stringify(moedas))
}


export const deleteMoeda = (id) =>{

   const moedas = getMoedas();

    const newMoedas = moedas.filter((moeda)=> moeda.id!==id);
    localStorage.setItem(moedaKey, JSON.stringify(newMoedas))



}

export const getMoedas = () =>{

let moedas = JSON.parse(localStorage.getItem(moedaKey))

if(typeof moedas == 'undefined' || moedas === null){
    return []
}

    return moedas
}