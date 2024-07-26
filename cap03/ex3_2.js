const prompt = require("prompt-sync")() // Adiciona o pacote ao programa.
// Lê os dados.
const veiculo = prompt("Veículo: ")
const preco = Number(prompt("Preço R$: "))
const entrada = preco * 0.50 // Calcula valor de entrada.
const parcela = entrada / 12 // Calcula valor das parcelas.
//Exibe as respostas.
console.log(`Promoção ${veiculo}`) 
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcela.toFixed(2)}`)