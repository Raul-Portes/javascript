// trabalhando com destruturing  part 1

const lista= { nome: "Pedro",
               idade:23,
               endereco:{
                 rua:"Logradouro",
                 cep:123232
               }
            

             }

             const {nome, idade}=lista
             console.log(nome,idade)

             const {endereco :{rua,cep}} =lista

             console.log(rua,cep)