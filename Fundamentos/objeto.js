const prod1 = [] // Instânciando objeto
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 // Evitar atributos com espaços

console.log(prod1) // [ nome: 'Celular Ultra Mega', preco: 4998.9, 'Desconto legal': 0.4 ]

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2) // { nome: 'Camisa Polo', preco: 79.9 }