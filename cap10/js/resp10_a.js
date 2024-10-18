const frm = document.querySelector("form")
const divResp = document.getElementById("divIdade")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const idade = Number(frm.inIdade.value)
    criarImagem(idade)
    
})

function criarImagem(idade) {
    const splitIdade = idade.toString().split("")
    splitIdade.forEach((idade) => {
        const img = document.createElement("img")
        img.src = `img/${idade}.jpg`
        img.alt = `${idade}`
        divResp.appendChild(img)
    })
}

frm.addEventListener("reset", () => {
    const imgs = document.querySelectorAll("#divIdade img")
    imgs.forEach((img) => {
        divResp.removeChild(img)
    })
    frm.reset()
})

