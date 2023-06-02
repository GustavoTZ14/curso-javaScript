const notas = [5.5, 6.6, 7.7, 8.8, 9.9]

// sem callback
const notasBaixa1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixa1.push(notas[i])
    }
}

console.log(notasBaixa1)

//com callback
const notasBaixa2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixa2)

// callback com arrow function
const notasBaixa = nota => nota < 7
const notasBaixa3 = notas.filter(notasBaixa)

console.log(notasBaixa3)