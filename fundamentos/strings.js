// trabalhando com strings em js

let nome="Fulano";
let sobrenome ='Pereira';

console.log(nome);
console.log(sobrenome);
// retorna o caractere que esta o elemento
console.log(nome.charAt(2));
// pegar o valor dele na tabela unicode
console.log(nome.charCodeAt(3));

// pegar a string e até onde ela vai
console.log(nome.substring(1,5))

// concatenar string
console.log("sou lindo ".concat(nome).concat(" Meu time é foda"))

// substituir o valor
console.log(nome.replace("u","m"))

// transformar em array
console.log("maria pedro joao".split(","))
