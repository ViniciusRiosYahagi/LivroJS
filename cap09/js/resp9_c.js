const frm = document.querySelector("form")
const outQuantidade = document.getElementById("outQuantidade")
const outServico = document.getElementById("outServico")
const listServico = JSON.parse(localStorage.getItem("servico")) || []

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const inServico = frm.inServico.value
  addService(inServico)
})

function addService(servico) {
 if (!servico.trim() == "") {
  listServico.push(servico)
  renderText()
 }
}

function exeServico() {
  if (listServico.length) {
    const servico = listServico.shift()
    outServico.innerText = servico
    renderText()
  } else {
    outServico.innerText = "Não há Serviço"
  }
}

function renderText() {
  outQuantidade.innerText = listServico.length
  frm.inServico.value = ""
  localStorage.setItem("servico", JSON.stringify(listServico))
}

renderText()

