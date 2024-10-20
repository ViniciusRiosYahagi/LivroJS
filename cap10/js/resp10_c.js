const frm = document.querySelector("form")
const divJogos = document.getElementById("divJogos")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const clube = frm.inClube.value
  adicionar(clube)
})

function adicionar(clube) {
  const h5 = document.createElement("h5")
  h5.innerText = clube
  h5.className = "clube"
  divJogos.appendChild(h5)
  
  frm.inClube.value = ""
  frm.inClube.focus()
}

frm.btMontar.addEventListener("click", () => {

  const clubes = document.querySelectorAll("#divJogos h5")

  if (clubes.length % 2 === 0) {

    const h3 = document.createElement("h3")
    h3.innerText = "Tabela de Jogos"
    divJogos.appendChild(h3)

    const novaTable = document.createElement("table")
    novaTable.className = "table table-striped"
    divJogos.appendChild(novaTable)

    let linha
    for (let i = 0; i < clubes.length; i++) {
      if (i % 2 == 0) {
        linha = novaTable.insertRow(-1)
        const col0 = linha.insertCell(0)
        col0.textContent = clubes[i].innerText
      } else {
        const col1 = linha.insertCell(1)
        col1.textContent = clubes[i].innerText
      }
    } 
  } else {
      alert("O número de clubes inseridos deve ser par")
      return
  }

  btMontar.disabled = true
}) 

frm.addEventListener("reset", () => {
  location.reload()
})