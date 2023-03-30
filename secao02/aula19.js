// Tipos de dados primitivos
// strin number, undefined, null, boolean, symbol, undefined, object

const nome = 'Danny';
console.log(typeof nome, nome)  // string Danny

const num = 291821;
console.log(typeof num, num)  // number 291821

let nomeAluno;
console.log(typeof nomeAluno, nomeAluno)  // undefined undefined

const sobrenomeAluno = null
console.log(typeof sobrenomeAluno, sobrenomeAluno)  // object null

const boolean1 = true
console.log(typeof boolean1, boolean1) // boolean true

const boolean2 = false
console.log(typeof boolean2, boolean2) // boolean false

const a = [1, 2]
console.log(typeof a, a) // object [ 1, 2 ]

const b = a
console.log(typeof b, b) // object [ 1, 2 ]
