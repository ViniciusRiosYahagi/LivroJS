const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("pre")

const lista = []

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const num = Number(frm.inNumero.value)
  lista.push(num)
  resp1.innerText = `Números: ${lista.join(", ")}`
  resp2.innerText = ""

  frm.inNumero.value = ""
  frm.inNumero.focus()
})

frm.btOrdem.addEventListener("click", () => {
  if (lista.length == 0) {
    alert("Não há números na lista...")
    frm.inNumero.focus()
    return
  }

  let ordem = true

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > lista[i + 1]) {
      ordem = false
      break
    }
  }

  resp2.innerText = ordem ? "Ok! Números estão em ordem crescente" : "Atenção... Números não estão em ordem crescente"
})