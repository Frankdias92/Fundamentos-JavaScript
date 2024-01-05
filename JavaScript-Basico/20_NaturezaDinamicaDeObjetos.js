// Natureza Dinâmica de Objetos

const mouse = {
  cor: 'red',
  marca: 'dazz'
}
mouse.velocidade = 5000 //adicionando propriedades
mouse.trocarDPI = function () {
  console.log('Mudando DPI')
}
//delete mouse.cor
delete mouse.velocidade //removendo propriedades

console.log(mouse);