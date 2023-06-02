function gerarNúmerosEntre(min, max){
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve =>{
        const fator = max - min + 1
        const aleatório = parseInt(Math.random() * fator) + min
        resolve(aleatório)
    })
}

gerarNúmerosEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)