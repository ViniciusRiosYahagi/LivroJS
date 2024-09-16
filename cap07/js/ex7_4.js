const frm = document.querySelector("form")
const resp = document.querySelector("#outNome")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const nome = frm.inNome.value.trim()

  if (!nome.includes(" ")) {
    alert("Informe o nome completo...")
    return
  }

  const primeiroEspaco = nome.indexOf(" ")
  const ultimoEspaco = nome.lastIndexOf(" ")

  const cracha = nome.substr(0, primeiroEspaco) + nome.substr(ultimoEspaco)

  resp.innerText = cracha
})