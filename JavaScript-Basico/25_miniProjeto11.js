// Montador de Endereço

/**
  Criar um objeto endereço que contem:
  rua
  cidade
  CEP
  exibirEndereço()
 */

let endereco = {
  rua: 'a',
  cidade: 'Natal',
  cep: 84
}

function exibirEndereço(endereco) {
  for (let chave in endereco) console.log(chave, endereco[chave])
}

exibirEndereço(endereco)
