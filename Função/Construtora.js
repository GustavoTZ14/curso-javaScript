function carro (velocidadeM = 200, delta = 5){
    let velocidadeA = 0

    this.acelerar = function(){
        if(velocidadeA + delta <= velocidadeM){
            velocidadeA += delta
        }
        else{
            velocidadeA = velocidadeM
        }

    }

    this.getVelocidadeAtual = function(){
        return velocidadeA
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const Ferrari = new carro(350, 20)
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
console.log(Ferrari.getVelocidadeAtual())