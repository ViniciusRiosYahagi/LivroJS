const frm = document.querySelector("form")
const resp1 = document.getElementById("outDataLimite")
const resp2 = document.getElementById("outValorDesc")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const dataMulta = frm.inData.value
  const valorMulta = Number(frm.inValor.value)
  
  const dataLimite = new Date()

  const partes = dataMulta.split("-")

  dataLimite.setFullYear(Number(partes[0]))
  dataLimite.setMonth(Number(partes[1]) - 1)
  dataLimite.setDate(Number(partes[2]))

  const dia = dataLimite.getDate()

  dataLimite.setDate(dia + 90)
  const mes = dataLimite.getMonth() + 1
  const ano = dataLimite.getFullYear()

  const comDesconto = valorMulta * 0.80

  resp1.innerText = "Data Limite para Pagamento com Desconto: " + (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano
  resp2.innerText = "Valor com Desconto R$: " + comDesconto.toFixed(2)
})