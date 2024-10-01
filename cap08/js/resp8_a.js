const frm = document.querySelector("form")
const resp = document.getElementById("outResp")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = frm.inName.value
  const age = Number(frm.inAge.value)

  formattedName(name)
  chackAge(age)
})

function formattedName(name) {
  const nameSplit = name.split(" ")
  const nameReplace =  nameSplit.map((item) => item.replace(/[A-Za-z]/g, "-"))

  resp.innerText += ` ${name}\n ${nameReplace.join(" ")}\n `
}

function chackAge(age) {
  if (age <= 12) {
    resp.innerText += "Category: Children";
  } else if (age >= 13 && age <= 18) {
    resp.innerText += "Category: Youth";
  } else {
    resp.innerText += "Category: Adult";
  }
}
