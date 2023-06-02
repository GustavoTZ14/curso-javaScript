function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, i) => {
        valor = isNaN(valor)? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[i], valor)
    })
    return resultado.join('')
}

const preço = 29.9
const preçoParcela = 11
console.log(real `1x de ${preço} ou 3x de ${preçoParcela}`)