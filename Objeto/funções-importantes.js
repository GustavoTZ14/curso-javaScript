const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log("-".repeat(40))
console.log(Object.values(pessoa))
console.log("-".repeat(40))
console.log(Object.entries(pessoa))

console.log("-".repeat(40))

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave} - ${valor}`)
})

console.log("-".repeat(40))

Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]} - ${e[1]}`)
})

console.log("-".repeat(40))

Object.defineProperty(pessoa, 'dataDeNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2017'
})

console.log(pessoa.dataDeNascimento)
console.log(Object.keys(pessoa))

console.log("-".repeat(40))

const o1 = {a: 1}
const o2 = {b: 2, c: 3}
const o3 = {d: 4, b: 5, a: 6}
const obj = Object.assign(o1, o2, o3)

console.log(obj)
