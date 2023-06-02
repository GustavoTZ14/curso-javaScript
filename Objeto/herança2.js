const avo = {attr1: 'A'}
const pai = {__proto__:avo, attr2: 'B', attr3: '3'}
const filho = {__proto__:pai, attr3: 'C'}
console.log(filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais (delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }
        else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const Ferrari = {
    modelo: 'F40',
    velMax: 324
}

const Volvo = {
    modelo: 'V40',
}


Object.setPrototypeOf(Ferrari, carro)
Object.setPrototypeOf(Volvo, carro)

console.log(Ferrari)
console.log(Volvo)

Volvo.acelerarMais(100)
console.log(Volvo.status())

Ferrari.acelerarMais(200)
console.log(Ferrari.status())