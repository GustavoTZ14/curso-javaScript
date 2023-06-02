/*
function pessoa (){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
}

new pessoa
*/
function pessoa2 (){
    this.idade2 = 5

    const self = this
    setInterval(function(){
        self.idade2++
        console.log(self.idade2)
    },1000)
}

new pessoa2