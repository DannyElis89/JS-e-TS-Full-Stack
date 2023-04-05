/*
Operadores lógicos

&& : and
|| : or
! : not
*/

const expressaoAnd = true && true && true && true;
const expressaoOr = false || false || false || false;

const usuario = 'Luiz'; // form usuário digitou
const senha = '123456'; // form usuário digitou

//                      True                  False
const vaiLogar = usuario === 'Luiz' && senha === '12345';

console.log(vaiLogar);
console.log(!!true);
