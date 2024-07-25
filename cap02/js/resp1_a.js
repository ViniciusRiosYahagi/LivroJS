// Referência sobre os elementos da página.
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outMedicamento")
const resp2 = document.querySelector("#outPromocao")

// Ouvinte, acionando pelo submit.
frm.addEventListener("submit", (e) => {
  // Obtém os valores.
  const medicamento = frm.inMedicamento.value
  const preco = Number(frm.inPreco.value)
  // Calcula a promoção.
  const promocao = Math.floor(preco * 2)
  // Exibe a saida.
  resp1.innerText = `Promoção de ${medicamento}`
  resp2.innerText = `Leve 2 por apenas: ${promocao.toFixed(2)}`
  e.preventDefault() // Evita recarregamento da página.
})