function relatorioDemo() {
 document.getElementById("relatorio-diario").style.display = "block";
}

function relatorioDemoOculta() {
  document.getElementById("relatorio-diario").style.display = "none";
  document.getElementById("table").style.display = "none";
}

function salvar() {
    confirm('Deseja Confirmar?');
}

function exibeRelatorio(){
  preencheRelatorio()
document.getElementById("table").style.display = "block";
}
function preencheRelatorio() {
    
  const retida1 = document.getElementById("retida1");
  const retida2 = document.getElementById("retida2");
  const retida3 = document.getElementById("retida3");
  const retida4 = document.getElementById("retida4");
  const retida5 = document.getElementById("retida5");
  const retida6 = document.getElementById("retida6");
  const retida7 = document.getElementById("retida7");
  const pesoAmostraCBetume = document.getElementById("peso-amostra-com-betume");
  const pesoAmostraSBetume = document.getElementById("peso-amostra-sem-betume");
  const pesoArCP1 = document.getElementById("peso-ar-cp1");
  const pesoImersoCP1 = document.getElementById("peso-imerso-cp1");
  const pesoArCP2 = document.getElementById("peso-ar-cp2");
  const pesoImersoCP2 = document.getElementById("peso-imerso-cp2")

  retida1.value = geraRandom(0, 1)
  retida2.value = geraRandom(0, 1)
  retida3.value = geraRandom(0, 175)
  retida4.value = geraRandom(0, 175)
  retida5.value = geraRandom(0, 175)
  retida6.value = geraRandom(0, 175)
  retida7.value = geraRandom(0, 175)
  pesoAmostraCBetume.value = geraRandom(450, 1050)
  pesoAmostraSBetume.value = geraRandom(450, 1050)
  pesoBetume()
  pesoArCP1.value = geraRandom(1100, 1210)
  pesoImersoCP1.value = geraRandom(690, 730)
  pesoArCP2.value = geraRandom(1100, 1210)
  pesoImersoCP2.value = geraRandom(690, 730)
  volumeCP1()
  volumeCP2()

}
function geraRandom(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}