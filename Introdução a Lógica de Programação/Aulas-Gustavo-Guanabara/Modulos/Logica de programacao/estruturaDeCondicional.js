// #######################################################
// ESTRUTURAS DE REPETIÇÃO
// ########################################################

/*
let i = 0;

for (let i = 0 ; i <= 5; i++) {
  console.log(i);
}
*/

function contadorSalto() {
  const salto = parseInt(document.getElementById('nSalto').value);
  const valor = parseInt(document.getElementById('nFinal').value);
  let contador = 0;
  let interacoes = [];
  let i = 0;

  for (contador = i; contador <= valor; contador += salto) {
    
    interacoes.push(contador);
  }

  document.getElementById('mostrandoInteracoes').innerHTML = 'O valor de interacoes foi: ' + interacoes.join(', ') + '.';

  mostraSoma(interacoes);

}

// somarContador(interacoes);
const mostraSoma = (interacoes) => exibirSoma(interacoes);
function exibirSoma(interacoes) {
  
  result = 0;
  for (let i = 0; i < interacoes.length; i++) {
    result += interacoes[i]; 
  }
  result = document.getElementById('mostrandoSomaInt').innerHTML = 'A soma das interações foi: '+ result;
}

// Trocando o valor do botao
const outroNomeBtn = document.getElementById("btnTrocandoNome").value;
outroNomeBtn.addEventListener('click', exibirDiv);
// Escondendo o valor da soma atraves do botao
function exibirDiv() {
  const takeDiv = document.querySelector('#takeDiv');
  takeDiv.style.display === 'none';

  if (takeDiv.style.display === 'none') {
    takeDiv.style.display = 'block';
    document.getElementById('btnTrocandoNome').value = 'Esconde Soma';
  } else if (takeDiv.style.display === 'block') {
    takeDiv.style.display = 'none';
    document.getElementById('btnTrocandoNome').value = 'Mostrar Soma';
  } else {
    takeDiv.style.display = 'block';
  }
}