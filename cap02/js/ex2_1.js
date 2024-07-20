// Cria refência ao form e ao elemento h3 (Onde será exibido a resposta).
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado.
frm.addEventListener("submit", (e) => {
  const name = frm.inName.value // Obtém o nome digitado no form.
  resp.innerText = name // Exibe a resposta do programa.
  e.preventDefault() // Evita envio do form
})
