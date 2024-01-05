/**
 * Introdução a Arrays
 *
 * Add novos elementos
 * Encontrar Elementos
 * Remover Elementos
 * Dividir Elementos
 * Dividir Arrays
 * Combinar Arrays
 */

// Add Elementos a um Array
console.log('Add Elementos')
const numeros = [1, 2, 3]

//inicio
numeros.unshift(0)
console.log(numeros)

//meio
numeros.splice(1, 0, 'a')
console.log(numeros)

//Final
numeros.push(5)
console.log(numeros)

//Encontrar Elementos
console.log('Encontrando Elementos')
const numerosFind = [1, 2, 3, 4]
console.log(numerosFind.indexOf(2) !== -1)

console.log(numeros.includes(2))

//tipos de referencia
console.log('Tipos de Referencia')
//# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

const marcas = [
  { id: 1, nome: 'a' },
  { id: 2, nome: 'b' }
]

const marca = marcas.find(function (marca) {
  return marca.nome === 'a'
})

console.log(marca)

// Arrow Functions
console.log('Arrow functions')

const alunos = [
  { id: 1, nome: 'Franklin' },
  { id: 2, nome: 'Macedo' }
]

console.log(alunos.find(alunos => alunos.nome === 'Franklin'))


// Remover Elementos
console.log('Removendo Elementos');
const elementosRemover = [1,2,3,4,5,6];

//Final
console.log('Final')
const ultimo = elementosRemover.pop();
console.log(ultimo);
console.log(elementosRemover);

//Meio
console.log('Meio')
const meio = elementosRemover.splice(2,1);
console.log(meio);

//Inicio
console.log('Inicio')
const inicio = elementosRemover.shift();
console.log(inicio);
console.log(elementosRemover);


// Esvaziando Array

console.log('Esvaziando Array');
let esvaziandoArray = [1,2,3,4,5,6];
let outros = esvaziandoArray;
/**
//solução 1
outros = [];
esvaziandoArray = [];
console.log(outros);

//solução 2
while (esvaziandoArray.length > 0);
  esvaziandoArray.pop();
console.log(esvaziandoArray);

//Solução 3
esvaziandoArray.splice(0,outros.length);
console.log(esvaziandoArray)
*/

//Solução 4
esvaziandoArray.length = 0;
console.log(esvaziandoArray);


//Combinando e cortando ARRAYS
console.log('Combinando e cortando ARRAYS')
const primeiro = [1,2,3];
const segundo = [4,5,6];
//combinando
const combinando = primeiro.concat(segundo);
console.log(combinando)
//Dividir
const cortando = combinando.slice(1,3);
console.log(cortando);


//Operando Spread
console.log('Operando Spread');
const spread = [...primeiro, '%', ...segundo];
console.log(spread)



//Interando um Array
console.log('Interando um Array')
combinando.forEach((interando) => console.log(interando))

// Combinando Arrays
console.log('Combinando Arrays')
const ponto = combinando.join('.');
console.log(ponto)

const frase = 'Olá seja bem vindo';
const resultado = frase.split(' ');
console.log(resultado);

console.log(resultado.join('-'));

