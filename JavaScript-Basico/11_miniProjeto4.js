/**
  Velocidade máxima de 70km/h
  a cada 5km acima do limite você ganha 1 ponto
  Math.floor()
  caso pontos maior que 12 -> "Carteira Suspendida"
 */

verificarVelocidade(70)

function verificarVelocidade(velocidade) {
  const velocidadeMaxima = 70
  const kmPorPonto = 5
  if (velocidade <= velocidadeMaxima) console.log('Dentro do Limite')
  else {
    const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto)
    if (pontos >= 12) console.log('Carteira Suspensa')
    else console.log('Pontos', pontos)
  }
}
