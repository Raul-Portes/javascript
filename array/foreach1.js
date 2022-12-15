// trabalhando com foreach
const lista =["Maria","João","Felipe","Julia"]

lista.forEach(function(nome,indice){
    console.log(`${indice+1}) ${nome}`)
})

console.log("#################")

lista.forEach(nome=>console.log(nome))