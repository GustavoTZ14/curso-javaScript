const produto = Object.preventExtensions({
    nome: 'Qualquer', preço: 1.99, tag: 'Promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descrição = 'Borracha branca'
delete produto.tag
console.log(produto)

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
pessoa.nome = 'Julia'
pessoa.idade = 45
delete pessoa.nome
console.log(pessoa)