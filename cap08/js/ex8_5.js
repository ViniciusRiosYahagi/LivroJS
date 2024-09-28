const prompt = require("prompt-sync")()
const wines = []

function title(text) {
  console.log()
  console.log(text)
  console.log("=".repeat(40))
}

do {
  title("===< wine registry >===")

  console.log("1. Wine Inclusion")
  console.log("2. Wine List")
  console.log("3. Search for Wine")
  console.log("4. Average and Highlight")
  console.log("5. Finish")

  const option = Number(prompt("Option: "))

  switch (option) {
    case 1 :
      include()
      break
    case 2 :
      list()
      break
    case 3 :
      search()
      break
    case 4 :
      calculateAverage()
      break
    case 5 :
      process.exit()
  }
} while(true)

function include() {
  title("===< Wine Inclusion >===")

  const brand = prompt("Brand...")
  const type = prompt("Type...")
  const price = Number(prompt("Price $:"))

  wines.push({brand, type, price})
  console.log("Wine Registered Successfully")
}

function list() {
  title("===< List of Wine Registered >===")
  console.log("Brand............... Type............... Price $:")

  for (const wine of wines) {
    console.log(`${wine.brand.padEnd(20)} ${wine.type.padEnd(20)}  ${wine.price.toFixed(2).padEnd(9)}`)
  }
}

function search() {
  title("===< Search for Type of Wine >===")

  const search = prompt("Type: ")

  let counter = 0
  console.log("Brand............... Type............... Price $:")

  for (const wine of wines) {
    if (wine.type.toUpperCase().includes(search.toUpperCase())) {
      console.log(`${wine.brand.padEnd(20)} ${wine.type.padEnd(20)}  ${wine.price.toFixed(2).padEnd(9)}`)

      counter++
    }
  }

  if (counter == 0) {
    console.log(`There are no registered wines of this type ${search}`)
  }
}

function calculateAverage() {
  title("===< Average and Highlights of the Wine registry >===")

  const num = wines.length
  if (num == 0) {
    console.log("There are no wines registered")
    return
  }

  let total = 0
  for (const wine of wines) {
    total += wine.price
  }

  const average = total / num

  const wines2 = [...wines]
  wines2.sort((a, b) => a.price - b.price)

  const lowest = wines2[0]
  const highest = wines[num -1]

  console.log(`average price of wines $: ${average.toFixed(2)}`)
  console.log(`Lowest Price $: ${lowest.price.toFixed(2)} - ${lowest.brand}`)
  console.log(`Highest Price $: ${highest.price.toFixed(2)} - ${highest.brand}`)
}