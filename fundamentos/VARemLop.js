// trabalhando com var em loops
// o i no loop em var ele o valor fora fica quando ele saiu do laço

for(var i =0; i<10; i++){
    console.log(`o i vale = ${i}`)
}
console.log(`i vale = ${i}`)

// com let
// o let a veriavel tem escopo de bloco 

for(let j =0; j<10; j++){
    console.log(j)
}

console.log(j)
