// trabalhando com funçao em js

function soma (n1=1 , n2=0){
    return n1+n2;
}

console.log(soma())

// armazenar funçao em uma variavel

const imprimirsoma = function (a,b){
    console.log(a+b)
}

imprimirsoma(2,3);

// funcão arrow

const somar = (a,b)  => {
    return a + b;
}

console.log(somar(2,2))

// retorno implicito unica linha

const subtracao =(a,b) => a-b

console.log(subtracao(5,2))