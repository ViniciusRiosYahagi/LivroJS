// Entradas e Elemtos.
const frm = document.querySelector("form")
const resp = document.querySelector("#outPagar")

//Ouvinte, acionado por Submit
frm.addEventListener("submit", (e) => {
  // Obtém os Valores.
  const valor = Number(frm.inValor.value)
  const tempo = Number(frm.inTempo.value)
  // Calcula valor a pagar.
  const pagar = Math.ceil(tempo / 15) * valor
  // Exibe o resultado.
  resp.innerText = `Valor a Pagar ${pagar.toFixed(2)}`
  // Evita o recarregamento da página.
  e.preventDefault()
})