//Laço For/Loop For

/**
  1. for
  2. While
  3. Do..while
  4. for..in
  5. for..of
 */

  for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) console.log(i)
  }
  
  //modolus
  

  //While loop

/**
 let i = 5
while (i >= 1) {
  if (i % 2 !== 0) {
    console.log(i)
  }
  i--
}
 

// Do..while
let i = 1;
do {
console.log('digitando!', i);
 i++;
} while (i <10)
*/

/**
  //laço for
const pessoa = {
  nome: 'Franklin',
  idade: 30,
};
//key-value
for(let chave in pessoa) {
  console.log(chave,pessoa['nome']);
}

const cores = ['Vermelho', 'Azul', 'Verde'];
for(let indice in cores) {
  console.log(indice,cores[indice])
}

//For-of
for(let cor of cores){
  console.log(cor);
}


// Escreva uma função que usa 2 números e retorna o maior entre eles.

let valorMaior = max(10,5);
  console.log(valorMaior);

function max(numero1,numero2) {
  /**
   if(numero1 > numero2)
    return numero1;
  return numero2;
   

  return numero1>numero2 ? numero1 : numero2 ;
  }
*/

