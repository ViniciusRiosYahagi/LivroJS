// Referencias e Elementos.
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outMedia")
const resp2 = document.querySelector("#outResultado")

// Ouvinte, acionado com Submit.
frm.addEventListener("submit", (e) => {
  // Evita recarregamento da página.
  e.preventDefault() 
  // Recebe os Valores.
  const nome = frm.inNome.value
  const nota1 = Number(frm.inNota1.value)
  const nota2 = Number(frm.inNota2.value)
  // Calculo.
  const media = (nota1 + nota2) / 2
  // Saída / Resposta 1
  resp1.innerText = `Média das Notas ${media.toFixed(2)}`
  // Condições
  if (media >= 7) {
    resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
    resp2.style.color = "green" // Adiciona estilo ao elemento.
  } else if (media >= 4) {
    resp2.innerText = `Atenção ${nome}. Você está em exame`
    resp2.style.color = "blue" // Adiciona estilo ao elemento.
  } else {
    resp2.innerText = `Ops ${nome}... Você foi reprovado(a)`
    resp2.style.color = "red" // Adiciona estilo ao elemento.
  }
})