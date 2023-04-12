/*
If, else if, else
*/


// const hora = 10

function saudacao (hora) {
  if (hora <= 11) return `Bom dia, são ${hora} horas`
  else if (hora < 18) return `Boa tarde, são ${hora} horas`
  else if (hora >= 18 && hora <= 23) return `Boa noite, são ${hora} horas`
  else return 'Olá, insira um horário válido'
}

console.log(saudacao(10)) // retorna 'Bom dia, são 10 horas'
console.log(saudacao(12)) // retorna 'Boa tarde, são 12 horas'
console.log(saudacao(13)) // retorna 'Boa tarde, são 13 horas'
console.log(saudacao(23)) // retorna 'Boa noite, são 23 horas'
console.log(saudacao(27)) // retorna 'Olá, insira um horário válido'
