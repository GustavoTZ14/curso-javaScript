function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Gui'
const situação = 'Aprovado'
console.log(tag`${aluno} está: ${situação}`)