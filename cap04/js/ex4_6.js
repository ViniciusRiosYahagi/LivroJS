// Obtém elementos da página.
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")
// Ouvinte.
frm.addEventListener("submit", (e) => {
  e.preventDefault() // Evita o envio.
  const saque = Number(frm.inSaque.value) // Obtém Valor.
  // Condições.
  if(saque % 10 != 0) {
   alert("Valor inválido para notas Disponíveis (R$ 10, 50, 100)")
   frm.inSaque.focus() 
   return
  }
  // Calculos.
  const notasCem = Math.floor(saque / 100) // Calcula notas de 100.
  let resto = saque % 100 // Quanto sobra para pagar.
  const notasCinquenta = Math.floor(resto / 50)  // Calcula notas de 50.
  resto = resto % 50 // Quanto ainda sobra.
  const notasDez = Math.floor(resto / 10) // Calcula notas de 10.
  // Saidas.
  if(notasCem > 0) {
    resp1.innerText = `Notas de R$ 100: ${notasCem}`
  }
  if(notasCinquenta > 0) {
    resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
  }
  if(notasDez > 0) {
    resp3.innerHTML = `Notas de R$ 10: ${notasDez}`
  }

})