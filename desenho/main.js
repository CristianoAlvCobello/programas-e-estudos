var blocos = {
'eu': [[0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0],
        [0,1,1,1,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0],
        [0,1,1,1,0,0,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0]],

'te': [[0,0,0,0,0,0,0,0,0],
      [0,1,1,1,0,1,1,1,0],
      [0,0,1,0,0,1,0,0,0],
      [0,0,1,0,0,1,1,1,0],
      [0,0,1,0,0,1,0,0,0],
      [0,0,1,0,0,1,1,1,0],
      [0,0,0,0,0,0,0,0,0]],

'amo': [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0],
        [0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0],
        [0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0],
        [0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0],
        [0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],

'barbara': [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0],
        [0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0],
        [0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0],
        [0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0],
        [0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
}

function desenharBloco(mensagem, matriz, tempoInicial = 0) {
    const blocoHTML = document.getElementById(mensagem)
    blocoHTML.innerHTML = ''
        for (let linha = 0; linha < matriz.length; linha++) {
            for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
                const quadrado = document.createElement('i')
                quadrado.classList.add('bi')
                quadrado.classList.add('bi-square')
                blocoHTML.appendChild(quadrado)
                if (matriz[linha][coluna] === 1) {
                    const tempoParaColorir = tempoInicial + (linha * matriz[linha].length + coluna) * 50;
                    setTimeout(() => {
                    quadrado.classList.remove('bi-square')
                    quadrado.classList.add('bi-square-fill')
                    }, tempoParaColorir)
                }
            }
          blocoHTML.appendChild(document.createElement("br"))
        }
}

var botao = document.getElementById("botao")
      
botao.addEventListener('click', function(){
  desenharBloco("msg-eu", blocos.eu, 0)
  desenharBloco("msg-te", blocos.te, 2700)
  desenharBloco("msg-amo", blocos.amo, 4500)
  desenharBloco("msg-barbara", blocos.barbara, 8000)
})
