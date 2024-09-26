const frm = document.querySelector("form")
const resp = document.getElementById("outResp")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const frase = frm.inFrase.value.toUpperCase()

  const fraseSemEspacos = frase.replace(/ /g, "")
  const tam = fraseSemEspacos.length
  let palindromo = true

  for (let i = 0; i < tam / 2; i++) {
    if (fraseSemEspacos[i] != fraseSemEspacos[tam - 1 - i]) {
      palindromo = false
      break
    }
  }

  if (palindromo) {
    resp.innerText = `${frase} é um Palíndromo`
  } else {
    resp.innerText = `${frase} Não é um Palíndromo`
  }

})