// criar de forma literal

function fun1 () { }

// Armazena em uma variável

const função = function() { }

// Armazena em uma array

const array = [function (a,b) {return a + b}]
console.log(array[0](2, 5))

// Armazena em um objeto

const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

// Passar função com parâmetro

function run(fun){
    fun()
}

run(function(){console.log("Carregando...")})

// Uma função pode retornar uma função/ ou conter uma função

function soma (a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 5)(4)
const fun2 = soma(2, 5)
fun2(4)