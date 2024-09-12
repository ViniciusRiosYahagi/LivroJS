const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const alunos = []

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const nome = frm.inNome.value
  const acertos = Number(frm.inAcertos.value)

  alunos.push({nome, acertos})

  resp.innerText = ""

  alunos.forEach((aluno) => {
    resp.innerText += `${aluno.nome} - ${aluno.acertos} acertos\n`
  })

  frm.inNome.value = ""
  frm.inAcertos.value = ""
})

frm.btListar.addEventListener("click", () => {
  if (alunos.length == 0) {
    alert("Não há alunos cadastrados...")
    return
  }

  resp.innerText = ""
    
  alunos.forEach((aluno) => {
    resp.innerText += `${aluno.nome} - ${aluno.acertos} acertos\n`
  })
})

frm.btAprovados.addEventListener("click", () => {

  if (alunos.length == 0) {
    alert("Não há alunos cadastrados...")
    return
  }

  const objetivo = prompt("Número de Acertos para Aprovação")
  const alunosFiltarados = alunos.filter((aluno) => aluno.acertos >= objetivo )

  resp.innerText = ""

  alunosFiltarados.forEach((aluno) => {
    resp.innerText += `${aluno.nome} - ${aluno.acertos} acertos\n`
  })

})