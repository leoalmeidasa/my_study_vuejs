const peso1 = 1.0 // Constante numerica
const peso2 = Number('2.0') // Função Number para converter string em number

// Observação tipo integer serve tanto para numero inteiro ou flutuante

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Método Number.isInteger determina se o valor passado é um inteiro.
console.log(Number.isInteger(peso2)) // Ambas retornam true.

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed usado para limitar para duas casas decimais o number
console.log(media.toString(2)) // toString converte para string e o 2 tranforma em binário
console.log(typeof media) // Tipo number
console.log(typeof Number) // TIpo function
console.log(typeof total) // Tipo number