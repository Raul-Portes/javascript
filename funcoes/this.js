// trabalhando com o this 

const pessoa ={
    saudacao:"Bom Dia",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()