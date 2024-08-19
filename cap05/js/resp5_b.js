const prompt = require("prompt-sync")()

let Chinchilas = Number(prompt("Nº Chinchilas: "))
let Ano = Number(prompt("Nº Anos: "))
let resp = ""

for (let i = 1; i <= Ano; i++) {
   resp += `${i}º Ano: ${Chinchilas} Chinchilas \n`
   Chinchilas *= 3
}

console.log(resp)