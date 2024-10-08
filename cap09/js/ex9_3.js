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
    localStorage.setItem("watermelonName", name)
    localStorage.setItem("watermelonWeight", weight)
  }

  showBets()
  frm.reset()
  frm.inName.focus()
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
  if (!localStorage.getItem("watermelonName")) {
    resp.innerText = ""
    return
  }

  const names = localStorage.getItem("watermelonName").split(";")
  const weight = localStorage.getItem("watermelonWeight").split(";")

  let lines = ""

  for (let i = 0; i < names.length; i++) {
    lines += `${names[i]} - ${weight[i]}gr \n`
  }

  resp.innerText = lines
}

window.addEventListener("load", showBets)

frm.btWinner.addEventListener("click", () => {
  if (!localStorage.getItem("watermelonName")) {
    alert("There are no registered bets")
    return
  }

  const correctWeight = Number(prompt("What is the correct weight of a watermelon?"))

  if (correctWeight == 0 || isNaN(correctWeight)) {
    return
  }

  const names = localStorage.getItem("watermelonName").split(";")
  const weights = localStorage.getItem("watermelonWeight").split(";")

  let winnerName = names[0]
  let winnerWeight = Number(weights[0])

  for (let i = 1; i < names.length; i++) {
    const difWinner = Math.abs(winnerWeight - correctWeight)
    const difBet = Math.abs(Number(weights[i]) - correctWeight)

    if (difBet < difWinner) {
      winnerName = names[i]
      winnerWeight = Number(weights[i])
    }
  }

  let msg = `Result - Correct Weight ${correctWeight}gr`
  msg += "\n----------------------------------------------"
  msg += `\nWinner: ${winnerName}`
  msg += `\nBet: ${winnerWeight}gr`
  alert(msg)
})

frm.btClear.addEventListener("click", () =>  {
  if (confirm("Confirm deletion of all bets?")) {
    localStorage.removeItem("watermelonName")
    localStorage.removeItem("watermelonWeight")
    showBets()
  }
})