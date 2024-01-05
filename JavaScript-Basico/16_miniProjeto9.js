// Contador de Asteríscos

// criar uma funçao que exibe a quantidade de *
// que aquela linha possui

exibirArsteriscos(10)

function exibirArsteriscos(linhas) {
/**
  let padrao = ''
  for (let linha = 1; linha <= linhas; linha++) {
    padrao += '*'
    console.log(padrao)
  }
 */

  for(let linha = 1; linha <= linhas; linha++){
    let padrao = '';
    for(let i = 0; i < linha; i++){
      padrao += '*'
    }
    console.log(padrao);
  }
}
