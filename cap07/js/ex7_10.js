const prompt = require("prompt-sync")()
const altura = prompt("Altura da Árvore: ")

console.log()
for (let i = 0; i < altura; i++) {
  const espacos = 30 + (altura - i)
  console.log(" ".repeat(espacos) + "*".repeat(i*2))
}
console.log()