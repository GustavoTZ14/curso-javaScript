const url = 'https://files.cod3r.com.br/curso-js/funcionarios.json/'
const axios = require("axios")

const Chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) =>{
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(Response =>{
    const funcionários = Response.data
    console.log(funcionários)

    const func = funcionários
    .filter(Chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)
})