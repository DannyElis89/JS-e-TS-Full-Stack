/*
Switch/Case
*/

const data = new Date();
console.log(data.toString())

let diaSemana;

switch (new Date().getDay()) {
  case 0:
    diaSemana = 'Domingo';
    break;
  case 1:
    diaSemana = 'Segunda-feira';
    break;
  case 2:
    diaSemana = 'Terça-feira';
    break;
  case 3:
    diaSemana = 'Quarta-feira';
    break;
  case 4:
    diaSemana = 'Quinta-feira';
    break;
  case 5:
    diaSemana = 'Sexta-feira';
    break;
  case 6:
    diaSemana = 'Sábado';
    break;
  default:
    diaSemana =  'Data inválida'
    break;
}

console.log(diaSemana)
