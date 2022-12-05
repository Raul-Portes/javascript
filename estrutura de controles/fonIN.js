// navegando pelo for in

notas=["maria","joao","pedro","paulo"]

for(i in notas){
    console.log(notas[i])
}




console.log("\n\n\n\n")
const pessoa={
    nome:"maria",
    idade:23,
    endereco:"rua jose mauricio ",
    altura:1.80
}

for (atributo in pessoa){
    console.log(`${atributo}== ${pessoa[atributo]}`)
}
