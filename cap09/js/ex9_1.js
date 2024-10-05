const frm = document.querySelector("form")
const imgClub = document.getElementById("imgClub")
const divTitle = document.getElementById("divTitle")

function changeClub() {
  let club

  if (frm.rbBrasil.checked) {
    club = "Brasil"
  } else if (frm.rbPelotas.checked) {
    club = "Pelotas"
  } else {
    club = "Farroupilha"
  }

  
  divTitle.className = `cores-${club}`
  

  imgClub.src = `img/${club.toLowerCase()}.png`
  imgClub.className = "exibir"
  imgClub.alt = `Simbolo do ${club}`

  localStorage.setItem("club", club)
}

function checkClub() {
  if (localStorage.getItem("club")) {
    const club = localStorage.getItem("club")

    if (club == "Brasil") {
      frm.rbBrasil.checked = true
    } else if (club == "Pelotas") {
      frm.rbPelotas.checked = true
    } else {
      frm.rbFarroupilha.checked = true
    }
    changeClub()
  }
}

frm.rbBrasil.addEventListener("click", changeClub)
frm.rbPelotas.addEventListener("click", changeClub)
frm.rbFarroupilha.addEventListener("click", changeClub)

window.addEventListener("load", checkClub)

