const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
]
 
let newArr = []

for (var found of products) {
    if (found.includes('Camiseta')){
        newArr.push(found)
    }   
}

console.log(newArr)