//if, else

/**
  Se a hora estiver entre 06:00 até 12:00 : Bom dia!
  Se estiver entre 12:00 até 18:00 : Boa tarde!
  Caso contrário : Boa noite!
*/
let hora = 19

if (hora > 6 && hora < 12) {
  console.log('Bom dia!')
} else if (hora > 12 && hora < 18) {
  console.log('Boa tarde!')
} else {
  console.log('Boa noite!')
}

// Switch .. case
let permissao //comum, gerente, diretor

permissao = 'comum'

switch (permissao) {
  case 'comum':
    console.log('Usuario comum')
    break

  case 'gerente':
    console.log('Usuario gerente')
    break

  case 'diretor':
    console.log('Usuario diretor')
    break

  default:
    console.log('Usuario não reconhecido!')
}
