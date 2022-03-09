// Observação toda instancia de uma function é um objeto

console.log(typeof Object) // function
console.log(typeof new Object) // Object

const Cliente = function() {}
console.log(typeof Cliente) // function
console.log(typeof new Cliente) // Object

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto) // function
console.log(typeof new Produto) // Object