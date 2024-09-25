const frm = document.querySelector("form")
const resp = document.getElementById("outResp")

let criptografado = []

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  let mensagem = frm.inMensagem.value
  
  for (let i = 0; i < mensagem.length; i++) {
    if(i % 2 == 0) {
      criptografado.push(mensagem[i])
    } else {
      criptografado.unshift(mensagem[i])
    }
  }

  resp.innerText = criptografado.join("")
  criptografado = []
})

frm.btDescriptografar.addEventListener("click", () => {
  
  let mensagem = frm.inMensagem.value
  criptografado.push(mensagem)

  resp.innerText = criptografado.join("")
  criptografado = []
})