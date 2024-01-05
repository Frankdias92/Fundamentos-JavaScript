/**
 * Tipagem Dinâmica no Javascript
 * 
 * typeof
 * object
 *  */



let nome = 'Franklin';
let idade = 30;
let estadoAprovado = true;
let sobrenome ; 

let pessoa = {
  nome: 'Franklin',
  sobrenome: 'Macedo',
  idade: 30,
  sexo: 'Masculino',
  altura: 1.82,
  estadoAprovado: true,

};

console.log(pessoa);

console.log(typeof pessoa);
console.log(typeof pessoa.nome);
console.log(typeof pessoa.idade);
console.log(typeof pessoa.estadoAprovado);