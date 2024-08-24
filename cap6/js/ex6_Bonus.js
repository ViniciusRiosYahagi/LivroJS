/* 
const carros = []
carros.push({modelo: "Sandro", preco: 46500})
carros.push({modelo: "Palio", preco: 37800})

for (let i = 0; i < carros.length; i++) {
  console.log(`${carros[i].modelo} ${carros[i].preco}`)
}

carros.forEach((carro,i) => {
  console.log(`${carro.modelo} ${carro.preco}`)
})

for (const carro of carros) {
  console.log(`${carro.modelo} ${carro.preco}`)
} 
*/

/*
const pacientes = ["Ana" ,"Carlos" ,"Sofia"]
const [a ,b ,c] = pacientes

console.log(a)
console.log(b)
console.log(c)
*/

/* 
const pacientes = ["Ana" ,"Carlos" ,"Sofia", "João"]
const [antender, proximo, ...outros] = pacientes

console.log(antender)
console.log(proximo)
console.log(outros) 
*/

/*
const carro = {modelo: "Corsa", preco: "59500"}
const carro2 = {...carro, ano: 2020} 

console.log(carro2)
*/

/*
let pacientes = ["João", "Sofia"]
pacientes = ["Ana", ...pacientes]
pacientes = [...pacientes, "Maria"]
*/

/*
const idades = [12, 20, 15, 17, 14]
let maiores = false
for (const idade of idades) {
  if (idade >= 18) {
    console.log(idade)
    maiores = true
  }
}

if (!maiores) {
  console.log("Não há idades maiores que 18 na lista")
}
*/

/*
const numeros = [10, 13, 20, 8, 15] 
const dobros = numeros.map((num,i) => num * 2)

console.log(dobros.join(","))
*/

/*
const numeros = [10, 13, 20, 8, 15] 
const pares = numeros.filter((num, i) => num % 2 == 0)

console.log(pares.join(","))
*/

/*
const numeros = [10, 13, 20, 8, 15] 
const soma = numeros.reduce((acumulador, num, i) => acumulador + num, 0)

console.log(`Soma: ${soma}`)
*/

/*
const numeros = [10, 13, 20, 8, 15] 
const maior = numeros.reduce((a,b) => Math.max(a,b), 0)

console.log(maior)
*/