const lista = [
  {
    name: 'sabao em po',
    preco: 5.45,
  },
  {
    name: 'cereal',
    preco: 7,
  },
  {
    name: 'toalha',
    preco: 30,
  },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function (prev, current, index) {
    console.log('rodada ', index + 1);
    console.log({ prev });
    console.log({ current });
    return prev - current.preco;
  }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));