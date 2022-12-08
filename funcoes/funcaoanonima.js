// trabalhando com funçao anonima 

falar = function(){
    console.log("Good Morning")
}

falar()

const soma = function(a, b){
    return  a + b
}
 const imprime = function (x,y, operacao = soma){
    console.log(operacao(x,y))
}
imprime(10,20,soma)