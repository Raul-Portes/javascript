// trabalhando com varios ifs

let nota = 3

if(nota >=7){
    console.log("Você esta aprovado")
}
else if(nota >=5){
    console.log("Você está de recuperação")

}
else{
    console.log("você está reprovado")
}


if (nota >=7){
    if(nota >=9){
        console.log("Aprovado com louvos")
    }
    else{
        console.log("Apenas aprovado")
    }

}
else if(nota >=5){
    console.log("Recuperação")

}
else{
    if (nota >=3){
        console.log("reprovado com louvor")
    }
    else{
        console.log("Apenas reprovado")
    }
    
    
}