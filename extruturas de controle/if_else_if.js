Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const notadoAluno = function(nota){
    if(nota.entre(9, 10)){
        console.log('Quadro de honra')
    }else if(nota.entre(7, 8.99)){
        console.log('aprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('recuperação')
    }else if(nota.entre(0, 3.99)){
        console.log('reprovado')
    }
}

notadoAluno(1)
notadoAluno(8)
notadoAluno(5)
notadoAluno(9)