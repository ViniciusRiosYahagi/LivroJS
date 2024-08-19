const prompt = require("prompt-sync")()

let numero = Number(prompt("Número: "))
let divisores = `Divisores do ${numero}: 1`
let soma = 1
let resposta = ""

for (let i = 2; i <= numero / 2; i++) {
  if(numero % i == 0) {
    divisores += `, ${i}`
    soma += i
  }
}

divisores += ` (Soma: ${soma})`

console.log(divisores)

if (numero == soma) {
  resposta = `${numero} É um Número Perfeito`
} else {
  resposta = `${numero} Não é um Número Perfeito`
}

console.log(resposta)