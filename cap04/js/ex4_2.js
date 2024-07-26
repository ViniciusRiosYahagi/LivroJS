// Referencias e Elementos.
const frm = document.querySelector("form")
const resp = document.querySelector("#outResultado")
// Ouvinte, acionado por Submit.
frm.addEventListener("submit", (e) => {
  e.preventDefault()
  // Armazena os valores nas variaveis.
  const nome = frm.inName.value
  const masculino = frm.inMasculino.checked
  const altura = Number(frm.inAltura.value)
  // condição ternário.
  const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)
  // Resultado 
  resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}kg`
})

frm.addEventListener("reset", () => {
  resp.innerText = ""
})