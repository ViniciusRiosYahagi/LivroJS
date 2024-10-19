const frm = document.querySelector("form")
const divNome = document.getElementById("divNome")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const nome = frm.inNome.value
  coresAleatoria(nome)
})

function coresAleatoria(nome) {
  const splitNome = nome.split(" ")
  splitNome.forEach((nome) => {
    const h3 = document.createElement("h3")
    h3.innerText = nome
    h3.style.color = `#${gerarCor()}`
    divNome.appendChild(h3)
  })
}

function gerarCor() {
  let cor = ""
  for (let i = 0; i < 3; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 256)
    const hexadecimal = numeroAleatorio.toString(16).padStart(2, "0")
    cor += hexadecimal
  }
  return cor
}