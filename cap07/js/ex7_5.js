const frm = document.querySelector("form")
const resp = document.querySelector("#outEmail")

frm.addEventListener("submit", (e) => {
  e.preventDefault()
  const nome = frm.inNome.value

  const partes = nome.split(" ")
  const tam = partes.length
  let email = ""

  for (let i = 0; i < tam - 1; i++) {
    email += partes[i].charAt(0)
  }

  email += partes[tam - 1] + "@empresa.com.br"
  resp.innerText = email.toLowerCase()
})