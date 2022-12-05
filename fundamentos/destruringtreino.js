// destruring pt2

pessoas={
    nome:"Fulano",
    sobrenome:"Pedro",
    idade:23,
    endereco:{
        rua:"rua antonia mollina bella",
        numero:30
    }
}

console.log(pessoas.nome)
console.log(pessoas.endereco.rua)

const {nome,sobrenome,idade}=pessoas

console.log(nome,sobrenome,idade)

const {endereco:{rua,numero}}=pessoas

console.log(rua,numero)