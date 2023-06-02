const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
pessoa.nome = 'Gustavo'
console.log(pessoa)

// pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // => congela o nome dos objetos, sendo assim impossível de mudar seu nome.

const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante)

