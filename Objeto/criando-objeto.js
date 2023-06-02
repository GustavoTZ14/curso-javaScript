const obj1 = {}
console.log(obj1)

const obj2 = new Object
console.log(obj2)

function produto (nome, preço, desc){
    this.nome = nome
    this.preçoComDesconto = () =>{
        return preço * (1 - desc)
    }
}

const p1 = new produto ('caneta', 7.99, 0.15)
const p2 = new produto ('notebook', 2998.99, 0.25)
console.log(p1.nome, p2.nome)
console.log(p1.preçoComDesconto(), p2.preçoComDesconto())
