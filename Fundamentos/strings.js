const escola = "Cod3r"

console.log(escola.charAt(4)) // Resultado r
console.log(escola.charAt(5)) // nulo
console.log(escola.charCodeAt(3)) // Busca na tabela unicode, resultado 51
console.log(escola.indexOf('3')) // Resultado é o indice onde o parametro se encontra, resultado 3

console.log(escola.substring(1)) // Começa do primeiro indice até o final, resultado od3r
 
// Começa do indice passado e vai até o anterior ao segundo parametro, resultado Cod
console.log(escola.substring(0, 3))

console.log('Escola'.concat(escola).concat("!")) // Concat usado para concatenar dados

// Replace utilizado para substitui todos os digitos pela letra e, obs usado RegExp
console.log(escola.replace(/\d/, 'e')) 

// Dividi uma string e retorna um array [ 'Ana', ' Maria', ' Pedro' ]
console.log('Ana, Maria, Pedro'.split(',')) 