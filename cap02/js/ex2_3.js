// Cria referência ao form e aos elementos e resposta (Pelo seu id).
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado.
frm.addEventListener("submit", (e) => {
  const veiculo = frm.inVeiculo.value // Obtém o conteúdo dos campos.
  const preco = Number(frm.inPreco.value)

  const entrada = preco * 0.50 // Calcula valor de entrada.
  const parcela = (preco * 0.50) / 12 // Calcula o valor das parcelas.

  resp1.innerText = `Promoção: ${veiculo}` // Exibe as respostas.
  resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
  resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`

  e.preventDefault() // Evita envio do form.
})