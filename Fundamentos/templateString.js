const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
// Usando template string, necessário usar crase
const template = ` 
    Olá
    ${nome}!`  

console.log(concatenacao, template)

// Expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //function toUpperCase coloca o texto em Maisculo.
console.log(`Ei... ${up('cuidado')}!`)