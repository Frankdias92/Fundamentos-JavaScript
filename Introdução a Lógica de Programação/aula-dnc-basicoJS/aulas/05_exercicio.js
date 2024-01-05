

// Realize uma operação de potenciação.
// 5² -> 5 é a nossa Base --> Qual o valor da Base:
// -> 2 é o nosso Expoente --> Qual o valor do Expoente:


/* let base, expoente, resultado;

base = prompt("Qual o valor da base: ");
expoente = prompt("Qual o valor do expoente: ");
resultado = base ** expoente;

alert("O valor de "+base+" elevado a "+expoente+" tem resultado "+resultado); */



function potencia(base, expoente) {
  let resultado = 1
  for(let i = 0; i<expoente; i++) {
    resultado *= base;
  }return resultado
}

let base, expoente;
base = prompt("Qual o valor da Base: ");
expoente = prompt("Qual o valor do Expoente: ");
resultado = potencia(base, expoente);

alert("O valor de "+base+" elevado a "+expoente+" tem resultado "+resultado);



// Realizando a função Math.pow() para executar a operação de potenciação em JavaScript.
// vou apreveitar a base e o expoente da function acima.

let result = Math.pow(base, expoente);
console.log(result); // resultado impresso no console
