// tipos boolean em JS

let isativo = false;
console.log(isativo);

isativo = true;
console.log(isativo);

isativo =1;
// ve se o valor é verdadeiro ou falso
console.log(!!isativo);

console.log("valores verdadeiros");
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!(isativo = true))
console.log(!! Infinity);

console.log("Valores negativos");

console.log(!!0)
console.log(!!'')
console.log(!!null )
console.log(!!NaN)
console.log(!!undefined)
console.log(!! (isativo = false))


console.log("Para finalizar");
let nome ="";
console.log(nome || "Sem nome:")
