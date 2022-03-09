// Observação quando se usa var, acontece o hosting onde 
// a var e inçada para cima, ou seja, para primeira linha

console.log(a) // undefined
var a = 2
console.log(a) // 2

console.log(b) // error Cannot access 'b' before initialization
let b = 2
console.log(b)