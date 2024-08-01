// Referencias e Elementos.
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outTempo")
const resp2 = document.querySelector("#outTroco")
// Ouvinte.
frm.addEventListener("submit", (e) => {
  // Evita envio.
  e.preventDefault()
  // Obtém o valor .
  const valor = Number(frm.inValor.value)
  // 1 Condição.
  if(valor < 1.00) {
    alert("Valor Insuficiente (no mínimo, R$ 1.00)")
    frm.inValor.focus()
  }
  // Variáveis.
  let tempo
  let troco
  // 2 Condição.
  if (valor >= 3.00) {
    tempo = 120
    troco = valor - 3.00
  } else if (valor >= 1.75) {
    tempo = 60
    troco = valor - 1.75
  } else {
    tempo = 30
    troco = valor - 1.00
  }

  // Saida.
  resp1.innerText = `Tempo: ${tempo} min`
  resp2.innerText = `Troco R$: ${troco.toFixed(2)}`

})