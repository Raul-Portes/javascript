// treinando funçoes

let msg =()=>{
    console.log("Seja bem vindo")
}

msg()

const listas={
    nome:"Maria",
    sobrenome:"Souza",
    chamar:function (){
        console.log(`eja bem vindo ${this.nome} ${this.sobrenome}`)

    }
}

listas.chamar()