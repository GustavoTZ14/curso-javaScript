function criarProduto (nome, preço){
    return{
        nome,
        preço,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 5000))
console.log(criarProduto('ipad', 10000))