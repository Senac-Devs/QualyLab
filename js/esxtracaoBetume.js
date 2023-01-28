//porcentagem
function porcentagem(a, b) {
  return (a / b) * 100
}

//mostrar resultados
function mostrarValor(valor) {
  console.log(valor.toFixed(2))
}

//somar valores
function soma(a, b) {
  return parseFloat(a + b)
}

//peso do Betume
function pesoBetume() {
  const pesoAmostraCBetume = parseFloat(
    document.getElementById('peso-amostra-com-betume').textContent,
  )

  const pesoAmostraSBetume = parseFloat(
    document.getElementById('peso-amostra-sem-betume').textContent,
  )

  const pesoBetume = pesoAmostraCBetume - pesoAmostraSBetume

  document.getElementById('peso-do-betume').value = parseFloat(
    pesoBetume.toFixed(2),
  )
  console.log(pesoAmostraSBetume)
  porcentagemBetume()
}

//% do Betume
function porcentagemBetume() {
  const pesoAmostraCBetume = parseFloat(
    document.getElementById('peso-amostra-com-betume').textContent,
  )

  const pesoBetume = parseFloat(document.getElementById('peso-do-betume').value)

  const porcentagemBetume = porcentagem(pesoBetume, pesoAmostraCBetume)

  document.getElementById(
    'porcentagem-do-betume',
  ).value = porcentagemBetume.toFixed(2)
}
