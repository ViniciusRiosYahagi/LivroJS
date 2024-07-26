const prompt = require("prompt-sync")() // Adiciona o pacote ao programa
// Lê as entradas.
const salario = Number(prompt("Salário R$: "))
const tempo = Number(prompt("Tempo (Anos): "))
// Calculos
const quadrienios = Math.floor(tempo / 4)
const acrescimo = salario * quadrienios / 100
// Saídas
console.log(`Quadriênios: ${quadrienios}`)
console.log(`Salário Final R$: ${(salario + acrescimo).toFixed(2)}`)
