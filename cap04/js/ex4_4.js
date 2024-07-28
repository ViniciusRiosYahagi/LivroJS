// Entrada e Elementos.
const frm = document.querySelector("form")
const resp = document.querySelector("h3")
// Ouvinte
frm.addEventListener("submit", (e) => {
  e.preventDefault() // Evita o envio.
  // Calculos.
  const horaBrasil = Number(frm.inHora.value) // Recebe o valor.
  let horaFraca = horaBrasil + 5
  // Condicional.
  if(horaFraca > 24) {
    horaFraca = horaFraca - 24
  }
  // Saida / Resposta
  resp.innerText = `Hora na França ${horaFraca.toFixed(2)}`
})