// usando continue e brack

const notas=[1,2,3,4,5,6,7,8,9]

for( i in notas){
    if ( i == 5){
        continue
    }
    console.log(`${i} = ${notas[i]}`)
}