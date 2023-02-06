//porcentagem
function porcentagem(a, b) {
    return (a / b) * 100;
}

//mostrar resultados
function mostrarValor(valor) {
    console.log(valor.toFixed(2));
}

//somar valores
function soma(a, b) {
    return parseFloat(a + b);
}

//peso do Betume
function pesoBetume() {
    const pesoAmostraCBetume = parseFloat(
        document.getElementById("peso-amostra-com-betume").value
    );

    const pesoAmostraSBetume = parseFloat(
        document.getElementById("peso-amostra-sem-betume").value
    );

    const pesoBetume = pesoAmostraCBetume - pesoAmostraSBetume;

    document.getElementById("peso-do-betume").value = parseFloat(
        pesoBetume.toFixed(2)
    );
    console.log(pesoBetume);
    porcentagemBetume();
    porcentagemRetida();
    porcentagemRetidaAcumulada();
    porcentagemPassando();
    atualizaChart();
}

//% do Betume
function porcentagemBetume() {
    const pesoAmostraCBetume = parseFloat(
        document.getElementById("peso-amostra-com-betume").value
    );

    const pesoBetume = parseFloat(
        document.getElementById("peso-do-betume").value
    );

    const porcentagemBetume = porcentagem(pesoBetume, pesoAmostraCBetume);

    document.getElementById("porcentagem-do-betume").value = parseFloat(
        porcentagemBetume.toFixed(2)
    );
    volumeCP1();
    volumeCP2();
    volumeCP3();
    // volumeCP4()
    // volumeCP5()
    // volumeCP6()
}

//Granulometria
function porcentagemRetida() {
    const pesoAmostraSBetume = parseFloat(
        document.getElementById("peso-amostra-sem-betume").value / 100
    );

    const retida1 = document.getElementById("retida1").value;
    const retida2 = document.getElementById("retida2").value;
    const retida3 = document.getElementById("retida3").value;
    const retida4 = document.getElementById("retida4").value;
    const retida5 = document.getElementById("retida5").value;
    const retida6 = document.getElementById("retida6").value;
    const retida7 = document.getElementById("retida7").value;

    const retidaPorcent1 = document.getElementById("retida-porcent-1");
    const retidaPorcent2 = document.getElementById("retida-porcent-2");
    const retidaPorcent3 = document.getElementById("retida-porcent-3");
    const retidaPorcent4 = document.getElementById("retida-porcent-4");
    const retidaPorcent5 = document.getElementById("retida-porcent-5");
    const retidaPorcent6 = document.getElementById("retida-porcent-6");
    const retidaPorcent7 = document.getElementById("retida-porcent-7");

    retidaPorcent1.value = parseFloat(retida1 / pesoAmostraSBetume).toFixed(2);
    retidaPorcent2.value = parseFloat(retida2 / pesoAmostraSBetume).toFixed(2);
    retidaPorcent3.value = parseFloat(retida3 / pesoAmostraSBetume).toFixed(2);
    retidaPorcent4.value = parseFloat(retida4 / pesoAmostraSBetume).toFixed(2);
    retidaPorcent5.value = parseFloat(retida5 / pesoAmostraSBetume).toFixed(2);
    retidaPorcent6.value = parseFloat(retida6 / pesoAmostraSBetume).toFixed(2);
    retidaPorcent7.value = parseFloat(retida7 / pesoAmostraSBetume).toFixed(2);
    console.log(retidaPorcent1);
}

function porcentagemRetidaAcumulada() {
    const retidaPorcent1 = document.getElementById("retida-porcent-1").value;
    const retidaPorcent2 = document.getElementById("retida-porcent-2").value;
    const retidaPorcent3 = document.getElementById("retida-porcent-3").value;
    const retidaPorcent4 = document.getElementById("retida-porcent-4").value;
    const retidaPorcent5 = document.getElementById("retida-porcent-5").value;
    const retidaPorcent6 = document.getElementById("retida-porcent-6").value;
    const retidaPorcent7 = document.getElementById("retida-porcent-7").value;

    const retidaPorcentAcum1 = document.getElementById("retida-porcent-acum-1");
    const retidaPorcentAcum2 = document.getElementById("retida-porcent-acum-2");
    const retidaPorcentAcum3 = document.getElementById("retida-porcent-acum-3");
    const retidaPorcentAcum4 = document.getElementById("retida-porcent-acum-4");
    const retidaPorcentAcum5 = document.getElementById("retida-porcent-acum-5");
    const retidaPorcentAcum6 = document.getElementById("retida-porcent-acum-6");
    const retidaPorcentAcum7 = document.getElementById("retida-porcent-acum-7");

    retidaPorcentAcum1.value = retidaPorcent1;

    retidaPorcentAcum2.value = (
        parseFloat(retidaPorcentAcum1.value) + parseFloat(retidaPorcent2)
    ).toFixed(2);
    retidaPorcentAcum3.value = (
        parseFloat(retidaPorcentAcum2.value) + parseFloat(retidaPorcent3)
    ).toFixed(2);
    retidaPorcentAcum4.value = (
        parseFloat(retidaPorcentAcum3.value) + parseFloat(retidaPorcent4)
    ).toFixed(2);
    retidaPorcentAcum5.value = (
        parseFloat(retidaPorcentAcum4.value) + parseFloat(retidaPorcent5)
    ).toFixed(2);
    retidaPorcentAcum6.value = (
        parseFloat(retidaPorcentAcum5.value) + parseFloat(retidaPorcent6)
    ).toFixed(2);
    retidaPorcentAcum7.value = (
        parseFloat(retidaPorcentAcum6.value) + parseFloat(retidaPorcent7)
    ).toFixed(2);
}

function porcentagemPassando() {
    const retidaPorcentAcum1 = document.getElementById(
        "retida-porcent-acum-1"
    ).value;
    const retidaPorcentAcum2 = document.getElementById(
        "retida-porcent-acum-2"
    ).value;
    const retidaPorcentAcum3 = document.getElementById(
        "retida-porcent-acum-3"
    ).value;
    const retidaPorcentAcum4 = document.getElementById(
        "retida-porcent-acum-4"
    ).value;
    const retidaPorcentAcum5 = document.getElementById(
        "retida-porcent-acum-5"
    ).value;
    const retidaPorcentAcum6 = document.getElementById(
        "retida-porcent-acum-6"
    ).value;
    const retidaPorcentAcum7 = document.getElementById(
        "retida-porcent-acum-7"
    ).value;

    const pass1 = document.getElementById("pass1");
    const pass2 = document.getElementById("pass2");
    const pass3 = document.getElementById("pass3");
    const pass4 = document.getElementById("pass4");
    const pass5 = document.getElementById("pass5");
    const pass6 = document.getElementById("pass6");
    const pass7 = document.getElementById("pass7");

    pass1.value = (100 - parseFloat(retidaPorcentAcum1)).toFixed(2);
    pass2.value = (100 - parseFloat(retidaPorcentAcum2)).toFixed(2);
    pass3.value = (100 - parseFloat(retidaPorcentAcum3)).toFixed(2);
    pass4.value = (100 - parseFloat(retidaPorcentAcum4)).toFixed(2);
    pass5.value = (100 - parseFloat(retidaPorcentAcum5)).toFixed(2);
    pass6.value = (100 - parseFloat(retidaPorcentAcum6)).toFixed(2);
    pass7.value = (100 - parseFloat(retidaPorcentAcum7)).toFixed(2);
}

const ctx = document.getElementById("myChart");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const pass3 = document.getElementById("pass3");
const pass4 = document.getElementById("pass4");
const pass5 = document.getElementById("pass5");
const pass6 = document.getElementById("pass6");
const pass7 = document.getElementById("pass7");

//grafico

let chart;

chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [0.074, 0.42, 2.0, 4.76, 9.52, 19.1, 25.4],
        datasets: [
            {
                label: "Passando (%)",
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
                label: "Faixa Min (%)",
                data: [2, 8, 22, 35, 56, 90, 100],
                borderWidth: 1,
            },
            {
                label: "Faixa Máx (%)",
                data: [8, 24, 46, 65, 80, 100, 100],
                borderWidth: 1,
            },
        ],
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: "Graduação da Mistura",
            },
        },
        scales: {
            x: {
                title: { display: true, text: "diametro das particulas - mm" },
                type: "logarithmic",
                min: 0,
                max: 50,
            },
            y: {
                title: { display: true, text: "porcentagem passando" },
                min: 0,
                max: 100,
            },
        },
    },
});

function atualizaChart() {
    chart.data.datasets[0].data = [
        pass7.value,
        pass6.value,
        pass5.value,
        pass4.value,
        pass3.value,
        pass2.value,
        pass1.value,
    ];
    chart.update();
}

//estabilidade marshall cp1
function volumeCP1() {
    const pesoArCP1 = parseFloat(document.getElementById("peso-ar-cp1").value);

    const pesoImersoCP1 = parseFloat(
        document.getElementById("peso-imerso-cp1").value
    );

    const volumeCP1 = pesoArCP1 - pesoImersoCP1;

    document.getElementById("volume-cp1").value = parseFloat(
        volumeCP1.toFixed(2)
    );

    densidadeApCP1();
    densidadeRiceCP1();
    porcVaziosCP1();
    vcbCP1();
    vamCP1();
    rbvCP1();
}

function densidadeApCP1() {
    const pesoArCP1 = parseFloat(document.getElementById("peso-ar-cp1").value);

    const volumeCP1 = parseFloat(document.getElementById("volume-cp1").value);

    const densidadeAPCP1 = pesoArCP1 / volumeCP1;

    document.getElementById("densidade-ap-cp1").value = parseFloat(
        densidadeAPCP1.toFixed(3)
    );
}

function densidadeRiceCP1() {
    const densidadeRiceCP1 = 2.591;
    document.getElementById("densidade-rice-cp1").value = parseFloat(
        densidadeRiceCP1.toFixed(3)
    );
}

function porcVaziosCP1() {
    const densidadeRiceCP1 = 2.591;

    const densidadeAPCP1 = parseFloat(
        document.getElementById("densidade-ap-cp1").value
    );

    const porcVaziosCP1 =
        ((densidadeRiceCP1 - densidadeAPCP1) / densidadeRiceCP1) * 100;

    document.getElementById("porcentagem-vaios-cp1").value = parseFloat(
        porcVaziosCP1.toFixed(2)
    );
}

function vcbCP1() {
    const densidadeCap = 1.01;

    const densidadeAPCP1 = parseFloat(
        document.getElementById("densidade-ap-cp1").value
    );

    const porcBetume = parseFloat(
        document.getElementById("porcentagem-do-betume").value
    );

    const vcbCP1 = (porcBetume * densidadeAPCP1) / densidadeCap;

    document.getElementById("vcb-cp1").value = parseFloat(vcbCP1.toFixed(2));
}

function vamCP1() {
    const porcVaziosCP1 = parseFloat(
        document.getElementById("porcentagem-vaios-cp1").value
    );

    const vcbCP1 = parseFloat(document.getElementById("vcb-cp1").value);

    const vamCP1 = porcVaziosCP1 + vcbCP1;

    document.getElementById("vam-cp1").value = parseFloat(vamCP1.toFixed(2));
}

function rbvCP1() {
    const vcbCP1 = parseFloat(document.getElementById("vcb-cp1").value);

    const vamCP1 = parseFloat(document.getElementById("vam-cp1").value);

    const rbvCP1 = (vcbCP1 / vamCP1) * 100;

    document.getElementById("rbv-cp1").value = parseFloat(rbvCP1.toFixed(2));
}

function estabilidadeLidaCP1() {
    const leituraDeflec = parseFloat(
        document.getElementById("leitura-deflectometro-cp1").value
    );

    const constantePrensa = parseFloat(
        document.getElementById("constante-prensa").value
    );

    const estabilidadeLida = leituraDeflec * constantePrensa;

    document.getElementById("estabilidade-lida-cp1").value = parseFloat(
        estabilidadeLida.toFixed(2)
    );
    estabilidadeCorrigidaCP1();
}

function estabilidadeCorrigidaCP1() {
    const estabilidadeLida = parseFloat(
        document.getElementById("estabilidade-lida-cp1").value
    );

    const fatorCorrecao = parseFloat(
        document.getElementById("fator-correcao-cp1").value
    );

    const estabilidadeCorrigida = estabilidadeLida * fatorCorrecao;

    document.getElementById("estabilidade-corrigida-cp1").value = parseFloat(
        estabilidadeCorrigida.toFixed(2)
    );
}

function fluenciaCP1() {
    const leituraInicia = document.getElementById("fluencia-inicial-cp1").value;

    const leituraFinal = document.getElementById("fluencia-final-cp1").value;

    const fluencia = leituraFinal - leituraInicia;

    document.getElementById("fluencia-cp1").value = parseFloat(
        fluencia.toFixed(2)
    );
}

//estabilidade marshall cp2
function volumeCP2() {
    const pesoArCP2 = parseFloat(document.getElementById("peso-ar-cp2").value);

    const pesoImersoCP2 = parseFloat(
        document.getElementById("peso-imerso-cp2").value
    );

    const volumeCP2 = pesoArCP2 - pesoImersoCP2;

    document.getElementById("volume-cp2").value = parseFloat(
        volumeCP2.toFixed(2)
    );

    densidadeApCP2();
    densidadeRiceCP2();
    porcVaziosCP2();
    vcbCP2();
    vamCP2();
    rbvCP2();
}

function densidadeApCP2() {
    const pesoArCP2 = parseFloat(document.getElementById("peso-ar-cp2").value);

    const volumeCP2 = parseFloat(document.getElementById("volume-cp2").value);

    const densidadeAPCP2 = pesoArCP2 / volumeCP2;

    document.getElementById("densidade-ap-cp2").value = parseFloat(
        densidadeAPCP2.toFixed(3)
    );
}

function densidadeRiceCP2() {
    const densidadeRiceCP2 = 2.591;
    document.getElementById("densidade-rice-cp2").value = parseFloat(
        densidadeRiceCP2.toFixed(3)
    );
}

function porcVaziosCP2() {
    const densidadeRiceCP2 = 2.591;

    const densidadeAPCP2 = parseFloat(
        document.getElementById("densidade-ap-cp2").value
    );

    const porcVaziosCP2 =
        ((densidadeRiceCP2 - densidadeAPCP2) / densidadeRiceCP2) * 100;

    document.getElementById("porcentagem-vaios-cp2").value = parseFloat(
        porcVaziosCP2.toFixed(2)
    );
}

function vcbCP2() {
    const densidadeCap = 1.01;

    const densidadeAPCP2 = parseFloat(
        document.getElementById("densidade-ap-cp2").value
    );

    const porcBetume = parseFloat(
        document.getElementById("porcentagem-do-betume").value
    );

    const vcbCP2 = (porcBetume * densidadeAPCP2) / densidadeCap;

    document.getElementById("vcb-cp2").value = parseFloat(vcbCP2.toFixed(2));
}

function vamCP2() {
    const porcVaziosCP2 = parseFloat(
        document.getElementById("porcentagem-vaios-cp2").value
    );

    const vcbCP2 = parseFloat(document.getElementById("vcb-cp2").value);

    const vamCP2 = porcVaziosCP2 + vcbCP2;

    document.getElementById("vam-cp2").value = parseFloat(vamCP2.toFixed(2));
}

function rbvCP2() {
    const vcbCP2 = parseFloat(document.getElementById("vcb-cp2").value);

    const vamCP2 = parseFloat(document.getElementById("vam-cp2").value);

    const rbvCP2 = (vcbCP2 / vamCP2) * 100;

    document.getElementById("rbv-cp2").value = parseFloat(rbvCP2.toFixed(2));
}

function estabilidadeLidaCP2() {
    const leituraDeflec = parseFloat(
        document.getElementById("leitura-deflectometro-cp2").value
    );

    const constantePrensa = parseFloat(
        document.getElementById("constante-prensa").value
    );

    const estabilidadeLida = leituraDeflec * constantePrensa;

    document.getElementById("estabilidade-lida-cp2").value = parseFloat(
        estabilidadeLida.toFixed(2)
    );
    estabilidadeCorrigidaCP2();
}

function estabilidadeCorrigidaCP2() {
    const estabilidadeLida = parseFloat(
        document.getElementById("estabilidade-lida-cp2").value
    );

    const fatorCorrecao = parseFloat(
        document.getElementById("fator-correcao-cp2").value
    );

    const estabilidadeCorrigida = estabilidadeLida * fatorCorrecao;

    document.getElementById("estabilidade-corrigida-cp2").value = parseFloat(
        estabilidadeCorrigida.toFixed(2)
    );
}

function fluenciaCP2() {
    const leituraInicia = document.getElementById("fluencia-inicial-cp2").value;

    const leituraFinal = document.getElementById("fluencia-final-cp2").value;

    const fluencia = leituraFinal - leituraInicia;

    document.getElementById("fluencia-cp2").value = parseFloat(
        fluencia.toFixed(2)
    );
}

//estabilidade marshall cp3
function volumeCP3() {
    const pesoArCP3 = parseFloat(document.getElementById("peso-ar-cp3").value);

    const pesoImersoCP3 = parseFloat(
        document.getElementById("peso-imerso-cp3").value
    );

    const volumeCP3 = pesoArCP3 - pesoImersoCP3;

    document.getElementById("volume-cp3").value = parseFloat(
        volumeCP3.toFixed(2)
    );

    densidadeApCP3();
    densidadeRiceCP3();
    porcVaziosCP3();
    vcbCP3();
    vamCP3();
    rbvCP3();
}

function densidadeApCP3() {
    const pesoArCP3 = parseFloat(document.getElementById("peso-ar-cp3").value);

    const volumeCP3 = parseFloat(document.getElementById("volume-cp3").value);

    const densidadeAPCP3 = pesoArCP3 / volumeCP3;

    document.getElementById("densidade-ap-cp3").value = parseFloat(
        densidadeAPCP3.toFixed(3)
    );
}

function densidadeRiceCP3() {
    const densidadeRiceCP3 = 2.591;
    document.getElementById("densidade-rice-cp3").value = parseFloat(
        densidadeRiceCP3.toFixed(3)
    );
}

function porcVaziosCP3() {
    const densidadeRiceCP3 = 2.591;

    const densidadeAPCP3 = parseFloat(
        document.getElementById("densidade-ap-cp3").value
    );

    const porcVaziosCP3 =
        ((densidadeRiceCP3 - densidadeAPCP3) / densidadeRiceCP3) * 100;

    document.getElementById("porcentagem-vaios-cp3").value = parseFloat(
        porcVaziosCP3.toFixed(2)
    );
}

function vcbCP3() {
    const densidadeCap = 1.01;

    const densidadeAPCP3 = parseFloat(
        document.getElementById("densidade-ap-cp3").value
    );

    const porcBetume = parseFloat(
        document.getElementById("porcentagem-do-betume").value
    );

    const vcbCP3 = (porcBetume * densidadeAPCP3) / densidadeCap;

    document.getElementById("vcb-cp3").value = parseFloat(vcbCP3.toFixed(2));
}

function vamCP3() {
    const porcVaziosCP3 = parseFloat(
        document.getElementById("porcentagem-vaios-cp3").value
    );

    const vcbCP3 = parseFloat(document.getElementById("vcb-cp3").value);

    const vamCP3 = porcVaziosCP3 + vcbCP3;

    document.getElementById("vam-cp3").value = parseFloat(vamCP3.toFixed(2));
}

function rbvCP3() {
    const vcbCP3 = parseFloat(document.getElementById("vcb-cp3").value);

    const vamCP3 = parseFloat(document.getElementById("vam-cp3").value);

    const rbvCP3 = (vcbCP3 / vamCP3) * 100;

    document.getElementById("rbv-cp3").value = parseFloat(rbvCP3.toFixed(2));
}

function estabilidadeLidaCP3() {
    const leituraDeflec = parseFloat(
        document.getElementById("leitura-deflectometro-cp3").value
    );

    const constantePrensa = parseFloat(
        document.getElementById("constante-prensa").value
    );

    const estabilidadeLida = leituraDeflec * constantePrensa;

    document.getElementById("estabilidade-lida-cp3").value = parseFloat(
        estabilidadeLida.toFixed(2)
    );
    estabilidadeCorrigidaCP3();
}

function estabilidadeCorrigidaCP3() {
    const estabilidadeLida = parseFloat(
        document.getElementById("estabilidade-lida-cp3").value
    );

    const fatorCorrecao = parseFloat(
        document.getElementById("fator-correcao-cp3").value
    );

    const estabilidadeCorrigida = estabilidadeLida * fatorCorrecao;

    document.getElementById("estabilidade-corrigida-cp3").value = parseFloat(
        estabilidadeCorrigida.toFixed(2)
    );
}

function fluenciaCP3() {
    const leituraInicia = document.getElementById("fluencia-inicial-cp3").value;

    const leituraFinal = document.getElementById("fluencia-final-cp3").value;

    const fluencia = leituraFinal - leituraInicia;

    document.getElementById("fluencia-cp3").value = parseFloat(
        fluencia.toFixed(2)
    );
}
