
let n1 = prompt("Digite o primeiro numero: ")
let n2 = prompt("Digite o segundo numero: ")

// let c = a * b

// console.log(c)


function multiplicacao(a, b) {
  let c = a * b
  return c
}


let multiplicacaoArrow = (a, b) => {return a*b}

alert(multiplicacaoArrow(n1, n2))
