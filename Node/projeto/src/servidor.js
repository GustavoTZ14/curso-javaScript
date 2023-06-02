const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDados = require('./banco-de-dados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) =>{
    res.send(bancoDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancoDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) =>{
    const produto = bancoDados.salvarProduto({
        nome: req.body.nome,
        preço: req.body.preço
    })
    res.send(produto)
})

app.listen(porta, () =>{
    console.log(`Servidor está executando na porta ${porta}`)
})