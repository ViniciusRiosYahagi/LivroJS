const inRadios = document.querySelectorAll("input")
const imgClub = document.getElementById("imgClub")
const divtitle = document.getElementById("divTitle")

function changeClub() {
  const clubs = ["Brasil", "Pelotas", "Farroupilha"]

  let selection
  let index
  for (let i = 0; i < inRadios.length; i++) {
    if (inRadios[i].checked) {
      selection = inRadios[i].value
      index = i
      break
    }
  }

  if (!selection == "") {
    divtitle.className = `cores-${clubs[index]}`

    imgClub.src = `img/${clubs[index].toLowerCase()}.png`
    imgClub.className = "exibir"
    imgClub.alt = `Símbolo do ${clubs[index]}`
    // localStorage
    localStorage.setItem("club", clubs[index])
  } else {
    divtitle.className = "nenhum"

    imgClub.src = ""
    imgClub.className = "ocultar"
    imgClub.alt = ""
    localStorage.removeItem("club")
  }

}

for (const inRadio of inRadios) {
  inRadio.addEventListener("change", changeClub)
}

function checkClub() {
  if (localStorage.getItem("club")) {
    const club = localStorage.getItem("club")

    if (club == "Brasil") {
      inRadios[0].checked = true
    } else if (club == "Pelotas") {
      inRadios[1].checked = true
    } else {
      inRadios[2].checked = true
    }
    changeClub()
  }
}

window.addEventListener("load",checkClub)
