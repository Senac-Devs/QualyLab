function relatorioDemo() {
  const relDemo = document.getElementById('rel-demo')
  relDemo.innerHTML =
    '<img src="./assets/relatorio-demo/relatorio-demo.jpeg" style="margin-top: 20px; width: 100%;">'
}

function salvar() {
    const resposta = confirm('Deseja Confirmar?');

    if (resposta === true){
      const menu = document.getElementsByClassName("menu");
      console.log(menu)
      menu[0].style.display = 'nome';
      window.print();
    }
}