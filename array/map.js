// trabalhando com metodo map
// o map não altera o valor do array ele cria um novo 

 const nums =[1,2,3,4,5]
 

 let resultado = nums.map(function(e){
    return e *2
 })

 console.log(resultado)

 const soma10= e =>e +10
 console.log(nums.map(soma10))