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
    document.getElementById('peso-amostra-com-betume').value,
  )

  const pesoAmostraSBetume = parseFloat(
    document.getElementById('peso-amostra-sem-betume').value,
  )

  const pesoBetume = pesoAmostraCBetume - pesoAmostraSBetume

  document.getElementById('peso-do-betume').value = parseFloat(
    pesoBetume.toFixed(2),
  )
  console.log(pesoBetume)
  porcentagemBetume()
  porcentagemRetida()
  porcentagemRetidaAcumulada()
  porcentagemPassando()
  atualizaChart()
}

//% do Betume
function porcentagemBetume() {
  const pesoAmostraCBetume = parseFloat(
    document.getElementById('peso-amostra-com-betume').value,
  )

  const pesoBetume = parseFloat(document.getElementById('peso-do-betume').value)

  const porcentagemBetume = porcentagem(pesoBetume, pesoAmostraCBetume)

  document.getElementById('porcentagem-do-betume').value = parseFloat(
    porcentagemBetume.toFixed(2),
  )
  console.log(porcentagemBetume)
}

function porcentagemRetida() {
  const pesoAmostraSBetume = parseFloat(
    document.getElementById('peso-amostra-sem-betume').value / 100,
  )

  const retida1 = document.getElementById('retida1').value
  const retida2 = document.getElementById('retida2').value
  const retida3 = document.getElementById('retida3').value
  const retida4 = document.getElementById('retida4').value
  const retida5 = document.getElementById('retida5').value
  const retida6 = document.getElementById('retida6').value
  const retida7 = document.getElementById('retida7').value

  const retidaPorcent1 = document.getElementById('retida-porcent-1')
  const retidaPorcent2 = document.getElementById('retida-porcent-2')
  const retidaPorcent3 = document.getElementById('retida-porcent-3')
  const retidaPorcent4 = document.getElementById('retida-porcent-4')
  const retidaPorcent5 = document.getElementById('retida-porcent-5')
  const retidaPorcent6 = document.getElementById('retida-porcent-6')
  const retidaPorcent7 = document.getElementById('retida-porcent-7')

  retidaPorcent1.value = parseFloat(retida1 / pesoAmostraSBetume).toFixed(2)
  retidaPorcent2.value = parseFloat(retida2 / pesoAmostraSBetume).toFixed(2)
  retidaPorcent3.value = parseFloat(retida3 / pesoAmostraSBetume).toFixed(2)
  retidaPorcent4.value = parseFloat(retida4 / pesoAmostraSBetume).toFixed(2)
  retidaPorcent5.value = parseFloat(retida5 / pesoAmostraSBetume).toFixed(2)
  retidaPorcent6.value = parseFloat(retida6 / pesoAmostraSBetume).toFixed(2)
  retidaPorcent7.value = parseFloat(retida7 / pesoAmostraSBetume).toFixed(2)
  console.log(retidaPorcent1)
}

function porcentagemRetidaAcumulada() {
  const retidaPorcent1 = document.getElementById('retida-porcent-1').value
  const retidaPorcent2 = document.getElementById('retida-porcent-2').value
  const retidaPorcent3 = document.getElementById('retida-porcent-3').value
  const retidaPorcent4 = document.getElementById('retida-porcent-4').value
  const retidaPorcent5 = document.getElementById('retida-porcent-5').value
  const retidaPorcent6 = document.getElementById('retida-porcent-6').value
  const retidaPorcent7 = document.getElementById('retida-porcent-7').value

  const retidaPorcentAcum1 = document.getElementById('retida-porcent-acum-1')
  const retidaPorcentAcum2 = document.getElementById('retida-porcent-acum-2')
  const retidaPorcentAcum3 = document.getElementById('retida-porcent-acum-3')
  const retidaPorcentAcum4 = document.getElementById('retida-porcent-acum-4')
  const retidaPorcentAcum5 = document.getElementById('retida-porcent-acum-5')
  const retidaPorcentAcum6 = document.getElementById('retida-porcent-acum-6')
  const retidaPorcentAcum7 = document.getElementById('retida-porcent-acum-7')

  retidaPorcentAcum1.value = retidaPorcent1

  retidaPorcentAcum2.value = (
    parseFloat(retidaPorcentAcum1.value) + parseFloat(retidaPorcent2)
  ).toFixed(2)
  retidaPorcentAcum3.value = (
    parseFloat(retidaPorcentAcum2.value) + parseFloat(retidaPorcent3)
  ).toFixed(2)
  retidaPorcentAcum4.value = (
    parseFloat(retidaPorcentAcum3.value) + parseFloat(retidaPorcent4)
  ).toFixed(2)
  retidaPorcentAcum5.value = (
    parseFloat(retidaPorcentAcum4.value) + parseFloat(retidaPorcent5)
  ).toFixed(2)
  retidaPorcentAcum6.value = (
    parseFloat(retidaPorcentAcum5.value) + parseFloat(retidaPorcent6)
  ).toFixed(2)
  retidaPorcentAcum7.value = (
    parseFloat(retidaPorcentAcum6.value) + parseFloat(retidaPorcent7)
  ).toFixed(2)
}

function porcentagemPassando() {
  const retidaPorcentAcum1 = document.getElementById('retida-porcent-acum-1')
    .value
  const retidaPorcentAcum2 = document.getElementById('retida-porcent-acum-2')
    .value
  const retidaPorcentAcum3 = document.getElementById('retida-porcent-acum-3')
    .value
  const retidaPorcentAcum4 = document.getElementById('retida-porcent-acum-4')
    .value
  const retidaPorcentAcum5 = document.getElementById('retida-porcent-acum-5')
    .value
  const retidaPorcentAcum6 = document.getElementById('retida-porcent-acum-6')
    .value
  const retidaPorcentAcum7 = document.getElementById('retida-porcent-acum-7')
    .value

  const pass1 = document.getElementById('pass1')
  const pass2 = document.getElementById('pass2')
  const pass3 = document.getElementById('pass3')
  const pass4 = document.getElementById('pass4')
  const pass5 = document.getElementById('pass5')
  const pass6 = document.getElementById('pass6')
  const pass7 = document.getElementById('pass7')

  pass1.value = (100 - parseFloat(retidaPorcentAcum1)).toFixed(2)
  pass2.value = (100 - parseFloat(retidaPorcentAcum2)).toFixed(2)
  pass3.value = (100 - parseFloat(retidaPorcentAcum3)).toFixed(2)
  pass4.value = (100 - parseFloat(retidaPorcentAcum4)).toFixed(2)
  pass5.value = (100 - parseFloat(retidaPorcentAcum5)).toFixed(2)
  pass6.value = (100 - parseFloat(retidaPorcentAcum6)).toFixed(2)
  pass7.value = (100 - parseFloat(retidaPorcentAcum7)).toFixed(2)
}

const ctx = document.getElementById('myChart')
const pass1 = document.getElementById('pass1')
const pass2 = document.getElementById('pass2')
const pass3 = document.getElementById('pass3')
const pass4 = document.getElementById('pass4')
const pass5 = document.getElementById('pass5')
const pass6 = document.getElementById('pass6')
const pass7 = document.getElementById('pass7')

let chart

chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [0.074, 0.42, 2.0, 4.76, 9.52, 19.1, 25.4],
    datasets: [
      {
        label: 'Passando (%)',
        data: [
          pass7.value,
          pass6.value,
          pass5.value,
          pass4.value,
          pass3.value,
          pass2.value,
          pass1.value,
        ],
        borderWidth: 1,
      },
      {
        label: 'Faixa Min (%)',
        data: [2, 8, 22, 35, 56, 90, 100],
        borderWidth: 1,
      },
      {
        label: 'Faixa Máx (%)',
        data: [8, 24, 46, 65, 80, 100, 100],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Graduação da Mistura'
      }
    },
    scales: {
      x: {
        title: {display: true, text: 'diametro das particulas - mm'},
        type: 'logarithmic',
        min: 0,
        max: 50,
      },
      y: {
        title: {display: true, text: 'porcentagem passando'},
        min: 0,
        max: 100,
      },
    },
  },
})

function atualizaChart() {
  chart.data.datasets[0].data = [
    pass7.value,
    pass6.value,
    pass5.value,
    pass4.value,
    pass3.value,
    pass2.value,
    pass1.value,
  ]
  chart.update()
}
