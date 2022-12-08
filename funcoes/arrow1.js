// trabalhando com arrow function

let msg = function(){
    console.log("seja bem vindo")
}

msg()

msg =()=>{
    console.log("Não entre")
}
msg()

msg = ()=> "ola"

console.log(msg())