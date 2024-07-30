// Referencia e Elementos.
const frm = document.querySelector("form")
const resp = document.querySelector("h3")
// Ouvinte.
frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const number = Number(frm.inNumber.value)
  const resposta = (number % 2 == 1) ? "é Ímpar" : "é Par"
  // Saida.
  resp.innerText = `${number} ${resposta}`
})

