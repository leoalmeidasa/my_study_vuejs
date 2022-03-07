let isAtivo = false // false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo) // true

isAtivo = 1 
console.log(!!isAtivo) // true

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // true

// Como se atribui vazio como padrão, 
// caso não for atribuido valor a variavel nome, será atribuido Desconhecido
let nome = '' 
console.log(nome || 'Desconhecido') // Desconhecido