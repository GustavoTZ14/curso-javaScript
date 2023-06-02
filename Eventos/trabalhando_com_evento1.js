const body = document.querySelector(".conteudo")

body.addEventListener("click", (e) =>{
    e.preventDefault()
    console.log("Saindo em 5s")
    
    setTimeout(()=>{
    window.location.href = e.target.href
    },5000)
})