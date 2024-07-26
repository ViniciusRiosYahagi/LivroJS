const prompt = require("prompt-sync")() // Adiciona o pacote ao programa.
// Entradas
const pesoKg = Number(prompt("Peso da Ração (kg): "))
const consumo = Number(prompt("Consumo Diário (gr):"))
// Calculos
const pesoGr = pesoKg * 1000
const duracao = Math.floor(pesoGr / consumo)
const sobra = pesoGr % consumo
// Saídas
console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)