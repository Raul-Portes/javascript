const carrinho =[
    '{"nome":"Borracha","preco":3.45}',
    '{"nome":"caderno","preco":13.00}',
    '{"nome":"caneta","preco":7.50}'
]

// retorna um array com preços

const paraobj = json=> JSON.parse(json)

const apenaspreco= produto=>produto.preco

const resultado = carrinho.map(paraobj) .map(apenaspreco)

console.log(resultado)