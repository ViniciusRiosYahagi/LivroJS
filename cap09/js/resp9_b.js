const frm = document.querySelector("form")
const resp = document.querySelector("pre")
let list = JSON.parse(localStorage.getItem("list")) || []


frm.addEventListener("submit",(e) => {
  e.preventDefault()

  const product = frm.inProduct.value
  addList(product)
})
// Adiciona produtos a lista
function addList(product) {
  list.push(product)
  list.sort()
  localStorage.setItem("list", JSON.stringify(list))

  renderList()
  frm.reset()
}
// Exibe a lista 
function renderList() {
  let msg = ""
  msg += "Product Added\n"
  msg += "-".repeat(42)
  for (const item of list) {
    msg += `\n${item}`
  }

  resp.innerText = msg
}
// Remove todos os produtos da lista
function clearList() {
  localStorage.removeItem("list")
  list = []
  
  renderList()
}

window.addEventListener("load", renderList())