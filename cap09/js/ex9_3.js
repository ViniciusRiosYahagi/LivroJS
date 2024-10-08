const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = frm.inName.value
  const weight = Number(frm.inWeight.value)

  if (checkBetExist(weight)) {
    alert("Has anyone bet this weight, please try other")
    frm.inWeight.focus()
    return
  }

  if (localStorage.getItem("watermelonName")) {
    const watermelonName = localStorage.getItem("watermelonName") + ";" + name
    const watermelonWeight = localStorage.getItem("watermelonWeight") + ";" + weight
    localStorage.setItem("watermelonName", watermelonName)
    localStorage.setItem("watermelonWeight", watermelonWeight)
  } else {
    localStorage.setItem("watermelon", name)
    localStorage.setItem("watermelonWeight", weight)
  }
})

function checkBetExist(weight) {
  if (localStorage.getItem("watermelonWeight")) {
    const weights = localStorage.getItem("watermelonWeight").split(";")
    return weights.includes(weight.toString())
  } else {
    return false
  }
}

function showBets() {
  
}