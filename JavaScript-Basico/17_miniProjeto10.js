// Criar função para mostrar os numeros primos

exibirNumeroPrimos(15)

function exibirNumeroPrimos(limite) {
  for (let numero = 2; numero <= limite; numero++) {
    if (exibirNumeroPrimo(numero)) console.log(numero)
  }
}

function exibirNumeroPrimo(numero) {
  for (let divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      return false
    }
  }
  return true
}

/**
function exibirNumeroPrimos(limite) {
  for(let numero = 2; numero <= limite; numero++){
    let ehPrimo = true;

    for ( let divisor = 2; divisor < numero; divisor++){
      if(numero % divisor === 0){
        ehPrimo = false;
        break;
      }
    }

    if(ehPrimo) console.log(numero);
  }
}
 */
