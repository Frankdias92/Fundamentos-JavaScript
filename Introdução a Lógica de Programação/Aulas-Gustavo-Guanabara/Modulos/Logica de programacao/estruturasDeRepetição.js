function sortearNumbers() {
  let numerosSorteados = [];

  while (numerosSorteados.length < 5) {
    const numero = Math.floor(Math.random() * 100 + 1); // sortear um numero entre 1 e 100

    if (!numerosSorteados.includes(numero)) {
      numerosSorteados.push(numero);
    }
  }

  return numerosSorteados;
}

window.addEventListener('DOMContentLoaded', function() {
  const btnSortear = document.querySelector('#btnSortear');
  const showSorteados = document.querySelector('.showSorteados');

  btnSortear.addEventListener('click', function() {
    const numerosSorteados = sortearNumbers();
    showSorteados.innerHTML = 'Números Sorteados: ' + numerosSorteados.join(', ');
  });
});


function calcularFatorial() {
  let numero = document.querySelector('#fatorial').value;
  let resultado = document.querySelector('#fatorResultado');
  resultado.innerHTML = calcular(numero);
}

function calcular(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  return numero * calcular(numero - 1);
}