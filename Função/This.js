const pessoa = {
    saudação: "Bom dia",
    idade: 26,
    nome: "Gustavo",
    falar(){
        console.log(this.saudação, this.nome, this.idade)
    }
}

pessoa.falar()