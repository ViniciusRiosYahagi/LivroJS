// Cria referência ao form e ao elemento h3 (Onde será exibida a respota).
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado.
frm.addEventListener("submit", (e) => {
  const quilo = Number(frm.inQuilo.value) // Obtém conteúdo dos campos.
  const consumo =  Number(frm.inConsumo.value)

  const valor = (quilo / 1000) * consumo // Calcula valor a ser pago.
  resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}` // Exibe respota.

  e.preventDefault() // Evita envio do form.
})