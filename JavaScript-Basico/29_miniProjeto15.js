/**
 * Faixa de Preço
 *
 * Crie um array de objetos de faixa de preço para que ela possa ser usado em um site igual o Mercado Livre.
 */

//primeira opção
let faixas = [
  { tooltip: 'até R$700', minimo: 0, maximo: 700 },
  { tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000 },
  { tooltip: 'R$1000', minimo: 1000, maximo: 9999 }
]

//segunda opção
function faixaPreco(tooltip, minimo, maximo) {
  return {
    tooltip,
    minimo,
    maximo
  }
}
let faixas2 = [
  faixaPreco('a', 1, 100),
  faixaPreco('b', 100, 1000),
  faixaPreco('c', 1000, 10000)
]

//terceira opção (Constructor Function)
function preco(tooltip, minimo, maximo) {
  ;(this.tooltip = tooltip), (this.minimo = minimo), (this.maximo = maximo)
}
let faixas3 = [
  new preco('y', 10, 20),
  new preco('z', 20, 30),
  new preco('y', 40, 90)
]

console.log(faixas)
console.log(faixas2)
console.log(faixas3)
