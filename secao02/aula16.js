/*
imprimir no console:
"[nome] tem [idade] anos, pesa [peso] kg,
tem [alt] de altura e seu imc é de [imc]"
*/

const nome = 'Danny Elis';
const sobrenome = 'Simioni';
const idade = 33;
const peso = 72
const altura = 1.62

let imc;
let anoNascimento;

imc = (peso / (altura * altura)).toFixed(2)
anoNascimento = 1989

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg, tem ${altura} e seu imc é ${imc} e nasceu em ${anoNascimento}`)
