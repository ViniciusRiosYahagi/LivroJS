const frm = document.querySelector("form")
const resp = document.getElementById("outResp")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = frm.inName.value

  if (chackName(name)) {
    countVowels()
  }
})

function chackName(name) {
  const name2 = name.trim()

  if (!name2.includes(" ")) {
    frm.inName.placeholder = "Please enter full name"
    frm.inName.value = "" 
  } else {
    getSurname(name)
  }
}

function getSurname(name) {
  const nameArrey = name.split(" ")
  const lastName = nameArrey[nameArrey.length -1]
  const lowerName = lastName.toLowerCase()
  
  return lowerName
}

const lowerName = getSurname()

function countVowels(name, lastName) {
  
}
