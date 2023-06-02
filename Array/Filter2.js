Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produto = [
    {nome: 'Notebook', preço: 2499, frágil: true},
    {nome: 'ipad', preço: 4199, frágil: true},
    {nome: 'Copo de Vidro', preço: 12.49, frágil: true},
    {nome: 'Copo de plástico', preço: 18.99, frágil: false}
]

console.log(produto.filter(function(p){
    return false
}))

const caro = produtos => produtos.preço >= 500
const frágil = produtos => produtos.frágil

console.log(produto.filter2(caro).filter2(frágil))