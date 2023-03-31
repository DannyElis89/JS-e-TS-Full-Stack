/*
let a = b
let b = c
let c = a

console.log(a, b, c)
*/

// Resolução 1:
let a1 = 'A1'
let b1 = 'B1'
let c1 = 'C1'
const aTemp = a1

a1 = b1
b1 = c1
c1 = aTemp

console.log(a1, b1, c1)


// Resolução 2:
let a2 = 'A2'
let b2 = 'B2'
let c2 = 'C2'

[a2, b2, c2] = [b2, c2, a2]

console.log(a2, b2, c2)
