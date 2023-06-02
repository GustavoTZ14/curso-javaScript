const imprimaResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('aprovado')
            break
        case 7:
        case 5:
            console.log('recuperação')
            break
        case 3:
        case 1:
            console.log('reprovado')
            break
        default:
            console.log('não existe esta nota')

    }
}

imprimaResultado(10)
imprimaResultado(5)
imprimaResultado(3)
imprimaResultado(0)
imprimaResultado(11)