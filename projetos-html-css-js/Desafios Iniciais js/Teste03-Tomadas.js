let lines = gets().split("\n");

let line = lines.shift().split(' ');

let t = 5;
let soma = 0;

for (let i = 1; i < t; i++) {

soma = soma + parseInt(line.slice(-i));

}

soma = soma - 3;

console.log(soma);

