// AULA 01
/* let msg = "👋 Olá, Mundo!";

alert(msg);
 */

// AULA 02
// Perguntando o nome
function showName() {
  let textName = document.getElementById("myInput").value;
  document.getElementById("demo").innerHTML = "👋 Olá " + textName + ", seja bem vindo!";
};

// AULA 03
/* 
  Crie um programa que leia o nome e o salário de um funcionário, mostrando no final uma mensagem.
*/

function aulaFuncionario() {
  const data = new Date();
  let funcionario = document.getElementById("name3").value;
  let salario = document.getElementById("valorSalario").value;

  document.getElementById("aula3").innerHTML = "O "+funcionario+" tem um salário de "+salario+" em "+data.getFullYear()+".";
}

// AULA 04
/* 
  Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles.
*/

document.getElementById("calcBtn").addEventListener("click", function() {
  alert("insira os valore a serem somados!");
  let p1 = prompt("Digite o primeiro valor:");
  let operador = prompt("insira entre soma '+', subtração '-', multiplicação '*', divisão '/' e expoente '**'");
  let p2 = prompt("Digite o segundo valor:");
  
  calcular(p1,operador, p2);
})

const calcular = (n1, operador, n2) => {
  let result = ''

  if (operador === '+') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operador === '-') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operador === '*') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operador === '/') {
    result = parseFloat(n1) / parseFloat(n2)
  } else if (operador === '**') {
    result = parseFloat(n1) ** parseFloat(n2)
  }

  document.getElementById("calcMath").innerHTML = "O calculo entre "+n1+" e "+n2+" gerou o valor de "+ result;
}


// AULA 05
/* 
Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
na tela a sua média na disciplina.
*/

function calcularMedia() {
  let notaA = document.getElementById("nota1").value;
  let notaB = document.getElementById("nota2").value;
  let notaFinal = (parseInt(notaA) + parseInt(notaB)) / 2;

  retorno(notaFinal);
}
const retorno = (notaFinal) => {
  if (notaFinal >= 5 && notaFinal <7) {
    document.getElementById("retornoM").innerHTML = "Estude mais para passar! Você ficou em RECUPERAÇÃO";

  } else if (notaFinal >= 7) {
    document.getElementById("retornoM").innerHTML = "Parabéns, você PASSOU! 👏👏👏";
  } else {
    document.getElementById("retornoM").innerHTML = "Xiii, que pena! você foi REPROVADO... 😢";
  }
}


// AULA 06
/* 
Criar uma estrutura que mostre se a pessoa esta acima ou abaixo do seu IMC
*/


// AULA 07
/*
Aplicativo CRIANÇA ESPERANÇA 
*/


// 
/* 
  Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
  seu novo salário, com 15% de aumento.
*/
function novoSalario() {
  const nome = document.getElementById('nFuncionario').value;
  const vSalario = document.getElementById('nSalario').value;
  const nDependentes = document.getElementById('nDependentes').value;

  calcSalario(nome, vSalario, nDependentes);
}

const calcSalario = (nome, vSalario, nDependentes) => {
  const result = document.getElementById("mostraV");

  if (nDependentes === 0) {
    result.innerText = parseFloat(vSalario) + (parseFloat(vSalario) * 5/100);
  } else if (nDependentes >= 1 && nDependentes <= 3 ) {
    result.innerText = parseFloat(vSalario) + (parseFloat(vSalario) * 10/100);
  } else if (nDependentes >= 4 && nDependentes <= 6) {
    result.innerText = parseFloat(vSalario) + (parseFloat(vSalario) * 15/100);
  } else {
    result.innerText = parseFloat(vSalario) + (parseFloat(vSalario) * 18/100);
  }
  
  result.innerText += " Será o novo salario de, " + nome + " com " + nDependentes + " dependentes.";
}
const btn13 = document.getElementById("btn13");
btn13.addEventListener("click", mostrandoNovoSalario);

function mostrandoNovoSalario() {
  const showAula13 = document.getElementById("aula13");
  showAula13.style.display === "none";

  if (showAula13.style.display === "none") {
    showAula13.style.display = "block";
    btn13.innerText = "Esconder Formulário";
  } else if (showAula13.style.display === "block") {
    showAula13.style.display = "none";
    btn13.innerText = "Mostrar Formulário";
  } else {
    showAula13.style.display = "block";
  }
}