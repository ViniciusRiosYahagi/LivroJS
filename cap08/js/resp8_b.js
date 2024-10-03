const frm = document.querySelector("form")
const resp = document.getElementById("outResp")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = frm.inName.value

  if (chackName(name)) {
    const lastName = getSurname(name)
    countVowels(name, lastName)
  }
})

function chackName(name) {
  const name2 = name.trim()
  if (!name2.includes(" ")) {
    frm.inName.placeholder = "Please enter full name"
    frm.inName.value = "" 
    return false
  } else {
    return true
  }
}

function getSurname(name) {
  const nameArrey = name.split(" ")
  const lastName = nameArrey.pop()

  return lastName.toLowerCase()
}

function countVowels(name, lastName) {
  const vowels = name.match(/[aeiou]/gi)
  const qntVowels = vowels.length
  const concatZeroToVowels = qntVowels < 10 ? "0" + qntVowels : qntVowels

  resp.innerText = `${lastName}${concatZeroToVowels}`
}
