nota=40

// trabalhando com valores ternarios
resultado=(nota > 70)? "Aprovado":"Reprovado"

console.log(resultado)

if(nota >=70){
    if(nota >= 90){
        console.log("Passou com louvor")
    }
    else{
        console.log("Apenas passou")
    }
}
else if( nota >= 50){
    console.log("recuperação")

}
else{
    console.log("Reprovado")

}