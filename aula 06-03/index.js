const produtos = [
    { nome: "Caneta", qtde: 20, valor:2.50},
    { nome: "Impressora", qtde: 2, valor:112.50},
    { nome: "Mouse", qtde: 15, valor:132.50},
    { nome: "Headset", qtde: 5, valor:332.50},
    { nome: "Caneta", qtde: 9, valor:2.50},
    { nome: "fone", qtde: 3, valor:22.50},
]



//criar novo array, que armazene 3 produtos de forma aleatoria, 
//os produtos nao podem ser repetidos
//usar includes

// const randomProduto = [produtos [Math.floor(Math.random()* produtos.length)]
//     console.log(randomProduto)
// ]quokka - extention

//------------------------------------------------------
function getRandomValuesFromArray (array, ramdomQuantity){
    if (randomQuantity > array.lenght) return 'deu ruim'
    let randomProducts = []

    while (randomProducts.length < ramdomQuantity) {
        let randomNumber = Math.floor(Math.random()* array.lenght)
        console.log(randomNumber)
        if(!randomProducts.includes(array[randomNumber])) {
            randomProducts.push(array[randomNumber])
            console.log()
        } 
    }
    return randomProducts
}