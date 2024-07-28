// Entrada e Elementos.
const frm = document.querySelector("form")
const resp = document.querySelector("h3")
// Ouvinte.
frm.addEventListener("submit", (e) => {
  e.preventDefault() // Evita o envio.

  const numero = Number(frm.inNumero.value) // Recebe Valor.
  const raiz = Math.sqrt(numero)

  // Condições
  if(Number.isInteger(raiz)) {
    resp.innerText = `Raiz: ${raiz}` // Saida Verdadeira.
  } else {
    resp.innerText = `Não há raiz exata para ${numero}`
  }

})
