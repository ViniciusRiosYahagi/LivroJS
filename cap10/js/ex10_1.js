const frm = document.querySelector("form")
const divQuadro = document.getElementById("divQuadro")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const tarefa = frm.inTarefa.value

  const h5 = document.createElement("h5")
  const text = document.createTextNode(tarefa)
  h5.appendChild(text)
  divQuadro.appendChild(h5)

  frm.inTarefa.value = ""
  frm.inTarefa.focus()
})

frm.btSelecionar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5")

  if (tarefas.length === 0) {
    alert("Não há tarefas para selecionar")
    return
  }

  let index = -1

  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].className === "tarefa-selecionada") {
      tarefas[i].className = "tarefa-normal"
      index = i
      break
    }
  }

  if (index === tarefas.length -1) {
    index = -1
  }

  tarefas[index + 1].className = "tarefa-selecionada"
})

frm.btRetirar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5")

  let index = -1

  tarefas.forEach((tarefa, i) => {
    if (tarefa.className == "tarefa-selecionada")
    index = i
  })

  if (index == -1) {
    alert("Selecione uma tarefa para removê-la")
    return
  }

  if (confirm(`Confirma Exclusão de "${tarefas[index].innerText}"?`)) {
    divQuadro.removeChild(tarefas[index])
  }
})

frm.btGravar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5")

  if (tarefas.length === 0) {
    alert("Não há tarefas para serem salvos")
    return
  }

  let date = []

  tarefas.forEach((tarefas) => {
    date.push(tarefas.innerText)
  })
  
  localStorage.setItem("tarefas", JSON.stringify(date))

  if (localStorage.getItem("tarefas")) {
    alert("Ok! Tarefas Salvas")
  }
})

window.addEventListener("load", () => {
  if(localStorage.getItem("tarefas")) {
    const dates = JSON.parse(localStorage.getItem("tarefas"))

    dates.forEach((date) => {
      const h5 = document.createElement("h5")
      const text = document.createTextNode(date)
      h5.appendChild(text)
      divQuadro.appendChild(h5)
    })
  }
})