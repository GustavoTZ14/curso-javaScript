class lançamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lançamento = []
    }

    addLançamentos(...lançamento){
        lançamento.forEach(l => this.lançamento.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lançamento.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lançamento('Salario', 45000)
const contaDeLuz = new lançamento('luz', -220)

const contas = new cicloFinanceiro(6, 2018)
contas.addLançamentos(salario, contaDeLuz)
console.log(contas.sumario())