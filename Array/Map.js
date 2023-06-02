const num = [1, 2, 3, 4]

let resultados = num.map(function(e){
    return e * 2
})

console.log(resultados)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultados = num.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultados)