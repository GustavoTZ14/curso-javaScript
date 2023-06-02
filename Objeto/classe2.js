class avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends avo {
    constructor(sobrenome, profissão = 'Professor'){
        super(sobrenome)
        this.profissão = profissão
    }
}

class filho extends pai {
    constructor(){
        super('silva')
    }
}

const Filho = new filho
console.log(Filho)