/*
Operadores aritmeticos
  + Adição (num)/concatenação (string + outro tipo ou string + string)
  - Subtração
  * Multiplicação
  / Divisão
  ** exponenciação
  % resto da divisão inteira
*/

const num1 = 100;
const num2 = 5;
const num3 = 3;
const num4 = 'A20'

console.log(`Adição: ${num1} + ${num2} + ${num3} =  ${num1 + num2 + num3}`)
console.log(`Concatenação: ${num1} + ${num4} = ${num1 + num4}`)
console.log(`Subtração: ${num1} - ${num2} - ${num3} = ${num1 - num2 - num3}`)
console.log(`Multiplicação: ${num1} * ${num2} * ${num3} = ${num1 * num2 * num3}`)
console.log(`Divisão: ${num1} / ${num2} = ${num1 / num2}`)
console.log(`Exponenciação: ${num2} ** ${num3} = ${num2 ** num3}`)
console.log(`Resto da divisão inteira: ${num1} % ${num3} = ${num1 % num3}`)
console.log(`NaN (not a number): ${num1} / ${num4} = ${num1 / num4})`)
