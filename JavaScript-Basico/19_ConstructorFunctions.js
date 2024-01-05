//Constructor Functions

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
  return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar() {
      console.log('Fazendo ligação...')
    }
  }
}

const celular = criarCelular('Iphone', 6.8, 5000)
console.log(celular)


function criarPC(marcaPC,processador,armazanamento,fabricacao) {
  return {
    marcaPC,
    processador,
    armazanamento,
    fabricacao,
    ligar() {
      console.log('Seja Bem indo');
    }
  }
}

const notebook = criarPC('Lenovo','AMD Ryzen', '320 Gb', 2022)
console.log(notebook)