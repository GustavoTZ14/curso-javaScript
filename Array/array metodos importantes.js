const pilotos = [
    'Vettel',
    'Alonso',
    'Raikkonen',
    'Massa'
]
pilotos.pop() // remove o ultimo elemento do array.
console.log(pilotos)

console.log("-".repeat(40))

pilotos.push('Verstappen') // adiciona um elemento.
console.log(pilotos)

console.log("-".repeat(40))

pilotos.shift() // remove o primeiro elemento.
console.log(pilotos)

console.log("-".repeat(40))

pilotos.unshift('Hamilton')  // adiciona um elemento no primeiro índice.
console.log(pilotos)

console.log("-".repeat(40))

// splice pode adicionar e remover elementos.

pilotos.splice(2, 0, 'Bottas', 'Massa') // apartir do índice 2 adicionou 2 nomes. 
console.log(pilotos)

console.log("-".repeat(40))

const algunsPilotos1 = pilotos.slice(2) // apartir do ind 2 recorta os elementos.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)