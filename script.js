function abrirCarta() {
  document.getElementById('cartaFechada').style.display = 'none'
  document.getElementById('botaoAbrir').style.display = 'none'

  document.getElementById('cartaAberta').style.display = 'block'
  document.getElementById('botaoProxima').style.display = 'block'
}

function proximaPagina1() {
  document.getElementById('cartaAberta').style.display = 'none'
  document.getElementById('botaoProxima').style.display = 'none'

  document.getElementById('paginaMeio').style.display = 'block'
  document.getElementById('botaoProxima2').style.display = 'block'
}

function proximaPagina2() {
  document.getElementById('paginaMeio').style.display = 'none'
  document.getElementById('botaoProxima2').style.display = 'none'

  document.getElementById('paginaFinal').style.display = 'block'
  document.getElementById('botaoVoltar').style.display = 'block'
}

function voltarInicio() {
  document.getElementById('paginaFinal').style.display = 'none'
  document.getElementById('botaoVoltar').style.display = 'none'

  document.getElementById('cartaFechada').style.display = 'block'
  document.getElementById('botaoAbrir').style.display = 'block'
}
