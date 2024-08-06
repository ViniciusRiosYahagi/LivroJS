// Obtém elementos da página.
const frm = document.querySelector("form")
const resp = document.querySelector("pre")
// Evento submit.
frm.addEventListener("submit", (e) => {
  e.preventDefault() // Evita envio do form.

  const numero = Number(frm.inNumero.value)
  let resposta = ""
  // Loop for.
  for (let i = 1; i <= 10; i++) {
    resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`
  }
  // Saida.
  resp.innerText = resposta
})