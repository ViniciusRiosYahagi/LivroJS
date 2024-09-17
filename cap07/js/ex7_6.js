const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit",(e) => {
  e.preventDefault()

  const senha = frm.inSenha.value
  const erros = []

  if (senha.length < 8 || senha.length > 15) {
    erros.push("pssuir entre 8 a 15 caracteres")
  }

  if (senha.match(/[0-9]/g) == null) {
    erros.push("possuir números (no mínimo, 1)")
  }
  
  if (!senha.match(/[a-z]/g)) {
    erros.push("possuir letras mínusculas (no mínimo, 1)")
  }

  if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
    erros.push("possuir letras maiúsculas (no mínimo, 2)")
  }

  if (!senha.match(/[\w|_]/g)) {
    erros.push("possuir símbolos (no mínimo, 1)")
  }

  if (erros.length == 0) {
    resp.innerText = "ok! Senha Válida"
  } else {
    resp.innerText = `Erro... A senha deve ${erros.join(", ")}`
  }
})