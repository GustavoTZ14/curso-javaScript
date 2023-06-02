let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: 2
    })
})

p.then(function(valor){
    console.log(valor)
})

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)