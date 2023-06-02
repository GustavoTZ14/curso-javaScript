Array.prototype.forEach2 = function(callback){  // simula o foreach
    for(i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function( nome, i){
    console.log(`${i + 1}) ${nome}`)
})