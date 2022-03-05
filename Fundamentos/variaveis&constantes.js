var a = 3 // Variável de escopo global 
let b = 4 // Variável que funciona dentro de escopo na qual foi definida

var a = 30 // Sobrescrevendo a variável (var a), por ela ser de escopo global
b = 40 // Declaro novo valor para variável let b

console.log(a, b) // Mostrar o dados no terminal

a = 300
b = 400

console.log(a, b)

const c = 5 // Constante, não pode ser sobrescrita e nem declarado novo valor
// c = 50 // Error
console.log(c)