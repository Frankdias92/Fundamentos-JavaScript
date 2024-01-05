// JavaScript - Factory functions (função Fábrica)

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
  return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar() {
      console.log('Fazendo ligação...')
    }
  }
}

const celular1 = criarCelular('Assus', 6.8, 5500);
console.log(celular1)