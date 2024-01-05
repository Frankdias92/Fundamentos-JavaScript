//
/* doces = [
  {
    sabor: 'morango'
  },
  "pudim", "manjar", {}
]

doces[3].sabor =  "maracujá"

function visualizarSabor() {
  console.log(doces[0].sabor)
  console.log(doces[3])

  doces[1] = "goiabada"
}

console.log(doces[1])

visualizarSabor() */

/* function imprimirMensagem() {
  let mensagem = "Olá!"
  console.log(mensagem);
}

imprimirMensagem();
console.log(mensagem); */

/* let x = 1;
while (x <= 10) {
  console.log(x);
  x = x +2;
} */

/* let numeros = [1, 2, 3, 4, 5];
let soma = 0;

for (let i= 0; i < numeros.length; i++) {
  soma = soma + numeros[i];
}

console.log(soma); */

/* let idade = 15;
if (idade > 15 && idade < 18 || idade > 70) {
  console.log("O voto é opcional")
} else{
  console.log("Você precisa votar");
} */

let i = 0;
while(i < 11) {
  console.log(' 5 * ' + i + ' = ' + 5*i);
  i++;
}