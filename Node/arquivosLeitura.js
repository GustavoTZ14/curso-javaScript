const config = require('./arquivos.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos)=>{
    console.log('Conteúdo da pasta')
    console.log(arquivos)
})