/*
Avaliação de curto-circuito

&& -> Retorna o primeiro valor falso
|| -> Retorna o primeiro valor verdadeiro

Valores FALSY:
  false
  0
  null/undefined
  ''
  NaN
*/

console.log('Danny Elis' && null && 'Maria') // retorna null
console.log('Danny Elis' && true && 'Maria') // retorna 'Maria'


function falaOi () {
  return 'Oi';
}

const vaiExecutar1 = false;
const vaiExecutar2 = true;

console.log(vaiExecutar1 && falaOi()); // retorna false
console.log(vaiExecutar2 && falaOi()); // retorna true

const corUsuario1 = null;
const corPadrao1 = corUsuario1 || 'preto';

console.log(corPadrao1) // returna 'preto'

const corUsuario2 = 'vermelho';
const corPadrao2 = corUsuario2 || 'preto';

console.log(corPadrao2) // returna 'vermelho'
