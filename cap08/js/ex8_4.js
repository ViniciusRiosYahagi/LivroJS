const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const itens = []

frm.rbPizza.addEventListener("click", () => {
  frm.selectBebida.className = "oculta"
  frm.selectPizza.className = "exibe"
})

frm.rbBebida.addEventListener("click", () => {
  frm.selectPizza.className = "oculta"
  frm.selectBebida.className = "exibe"
})

frm.inDetalhes.addEventListener("focus", () => {
  if (frm.rbPizza.checked) {
    const pizza = frm.selectPizza.value
    const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4
    
    frm.inDetalhes.placeholder = `Até ${num} sabores`
  }
})

frm.inDetalhes.addEventListener("blur", () => {
  frm.inDetalhes.placeholder = ""
})

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  let produto

  if (frm.rbPizza.checked) {
    const index = frm.selectPizza.selectedIndex
    produto = frm.selectPizza.options[index].text
  } else {
    const index = frm.selectBebida.selectedIndex
    produto = frm.selectBebida.options[index].text
  }

  const detalhes = frm.inDetalhes.value
  itens.push(`${produto} (${detalhes})`)
  resp.innerText = itens.join("\n")

  frm.reset()
  frm.rbPizza.dispatchEvent(new Event("click"))
})