const frm = document.querySelector("form")
const tbFilmes = document.querySelector("table")
let list = JSON.parse(localStorage.getItem("filmes")) || []

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const titulo = frm.inTitulo.value
  const genero = frm.inGenero.value

  inserirLinha(titulo, genero)
  gravarFilme(titulo, genero)

  frm.reset()
  frm.inTitulo.focus()
})

function inserirLinha(titulo, genero) {
  const linha = tbFilmes.insertRow(-1)

	const col0 = linha.insertCell(0).innerText = titulo
	const col1 = linha.insertCell(1).innerText = genero
	const col2 = linha.insertCell(2).innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>"

	col0.innerText = titulo
	col1.innerText = genero
	col2.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>"

	col2.querySelector(".exclui").addEventListener("click", () => {
		linha.remove()
		excluirFilme(titulo)
	})
}

function excluirFilme(titulo) {
	list = list.filter((filme) => filme.titulo !== titulo)
	localStorage.setItem("filmes", JSON.stringify(list))
}

function gravarFilme(titulo, genero) {
	list.push({titulo, genero})
	localStorage.setItem("filmes", JSON.stringify(list))
}

window.addEventListener("load", () => {
	if (list) {
		list.forEach((filme) => {
			inserirLinha(filme.titulo,filme.genero)
		})
	}
})