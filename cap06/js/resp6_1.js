const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const clubes = []

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const clube = frm.inClube.value
  if(clube != "") {
    clubes.push(clube)
    alert(`${clube} Adicionado.`)
    frm.inClube.value = ""
  }
})

frm.btListar.addEventListener("click",() => {
  let lista = ""
  if (clubes.length == 0) {
    alert("A lista de clubes está vazia...")
    inClube.focus()
    return
  }
  for (let i = 0; i < clubes.length; i++) {
    lista += `${clubes[i]}\n`
  }
  resp.innerText = lista
})

frm.btTabela.addEventListener("click", () => {
  const tamanho = clubes.length
  if(tamanho == 0 || (tamanho % 2 == 1)) {
    alert("Deve haver mais de 1 clube")
    inClube.focus()
    return
  }

  let lista = ""
  let ultimo = tamanho - 1

  for (let i = 0; i < tamanho / 2; i++) {
    lista += `${clubes[i]} x ${clubes[ultimo - 1]}\n`
  }
  resp.innerText = lista
})