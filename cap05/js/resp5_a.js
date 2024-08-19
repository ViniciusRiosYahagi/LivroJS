const prompt = require("prompt-sync")()
const fruta = prompt("Fruta: ")
const num = Number(prompt("Número: "))

let resp = ""

for (let i = 1; i < num; i++) {
  resp += fruta + " * "
}

console.log(resp + fruta)