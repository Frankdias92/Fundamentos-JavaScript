let valorCorreto = 0

while (valorCorreto != 15) {
  alert("Valor incorreto!")
  valorCorreto = prompt("Digite o valor certo para finalizar: ")
}


const numeroPremiado = 8;

let tentativas = 0;
let palpite = parseInt(prompt("Adivinhe o número entre 1 e 10: "));

while (palpite !== numeroPremiado) {
  tentativas++;
  palpite = parseInt(prompt("Tente novamente: "));
}


console.log("Parabéns! Você acertou em", tentativas, "tentativas.");