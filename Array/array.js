let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(aprovados[4])

aprovados.push('Paulo', 'Rafael')
console.log(aprovados.length)

aprovados[9] = 'Gustavo'
console.log(aprovados)
console.log(aprovados.length)

aprovados[3, 4] = ('Paulo', 'Rafael')
console.log(aprovados)

aprovados.sort()           // sort() organiza os arrays...
console.log(aprovados)

delete aprovados[2]
console.log(aprovados)

aprovados.splice(1, 1)     // splice exclui elementos a partir do seu índice...
console.log(aprovados)

aprovados.splice(1, 2, 'elemento1', 'elemento2')  // exclui 2 elementos e adiciona mais 2 elementos...
console.log(aprovados)