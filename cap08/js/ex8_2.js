const frm = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")
const resp3 = document.getElementById("outResp3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const modelo = frm.inModelo.value
  const ano = Number(frm.inAno.value)
  const preco = Number(frm.inPreco.value)

  const classificacao = classificarVeiculo(ano)
  const entrada = calcularEntrada(preco, classificacao)
  const parcela = (preco - entrada) / 10

  resp1.innerText = `${modelo} - ${classificacao}`
  resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`
  resp3.innerText = `+10x de R$: ${parcela.toFixed(2)}`
})

function classificarVeiculo(ano) {
  const anoAtual = new Date().getFullYear()
  let classificacao 

  if (ano == anoAtual) {
    classificacao = "Novo"
  } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
    classificacao = "Seminovo"
  } else {
    classificacao = "Usado"
  }

  return classificacao
}

function calcularEntrada(valor, status) {
  return status == "Novo" ? valor * 0.5 : valor * 0.3
}

