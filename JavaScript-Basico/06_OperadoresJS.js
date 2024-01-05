let OperadoresJS

let OperadoresAritimeticos
/**
(matematicos)
// +, -, *, /, **
let salario = 100;

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);
 
// ++, -- / incremento, decremento
console.log(salario++)
//so consigo ver o resultado do incremento na proxima linha
console.log(salario, 'aqui o resultado do incremento')

console.log(salario)
console.log(++salario, 'atribuindo valor antes')
*/

// ######################
let OperadoresAtribuição
/**
 * let valorIngresso = 100;
console.log(valorIngresso)
//valorIngresso = valorIngresso + valorIngresso
valorIngresso += valorIngresso
console.log(valorIngresso)
 */

// ######################
let OperadoresDeComparação
/**
// Igualdade estrita
console.log(1 === 1)
console.log('1' === 1)

// Igualdade solta
console.log(1 == 1) //não recomendado
 */

// ######################
let OperadoresLogicos
// Cliente, 100 premium, comum
/**
let pontos = 100
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);
*/

// Operador Lógico e (&&)
// Retorna TRUE se os dois operandos forem true
//console.log(true && true)
//console.log(false && true)

/**
let maiorDeIdade = true
let possuiCarteiraDeTrabalho = true
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho

console.log(podeAplicar);
 */

// Operador Lógico ou (||)
// Retorna true somente se um dos operandos forem true
/**
 let maiorDeIdade = false
let possuiCarteiraDeTrabalho = false
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho

console.log('Pode aplicar',podeAplicar)

// Operador NOT (!)
let canditoRecusado = !podeAplicar

console.log('Candidato Resucado',canditoRecusado)
*/

// ######################
let OperadoresBitwise
//Comparações não boleanos
//  Falsy, underfined, null, 0, false, '', NaN - not a number

//Truthy

let corPersonalizada = 'Vermelho'
let corPadrao = 'Azul'
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil)
