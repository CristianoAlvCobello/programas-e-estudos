var blocos = {
      'eu': [
        [0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0],
        [0,1,1,1,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0],
        [0,1,1,1,0,0,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0]
      ],
      'te': [
        [0,0,0,0,0,0,0,0,0],
        [0,1,1,1,0,1,1,1,0],
        [0,0,1,0,0,1,0,0,0],
        [0,0,1,0,0,1,1,1,0],
        [0,0,1,0,0,1,0,0,0],
        [0,0,1,0,0,1,1,1,0],
        [0,0,0,0,0,0,0,0,0]
      ],
      'amo': [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0],
        [0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0],
        [0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0],
        [0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0],
        [0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      ],

      'barbara': [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0],
        [0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0],
        [0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0],
        [0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0],
        [0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      ]
    }

function desenharBloco(blocoId, desenhoMatriz, tempoInicial = 0) {
    const blocoHTML = document.getElementById(blocoId);
    blocoHTML.innerHTML = '';
        for (let linha = 0; linha < desenhoMatriz.length; linha++) {
            for (let coluna = 0; coluna < desenhoMatriz[linha].length; coluna++) {
                const quadrado = document.createElement('i');
                quadrado.classList.add('bi', 'bi-square');
                blocoHTML.appendChild(quadrado);
                if (desenhoMatriz[linha][coluna] === 1) {
                    const tempoParaColorir = tempoInicial + (linha * desenhoMatriz[linha].length + coluna) * 50;
                    setTimeout(() => {
                    quadrado.classList.replace("bi-square", "bi-square-fill");
                    }, tempoParaColorir);
                }
            }
          blocoHTML.appendChild(document.createElement("br"));
        }
}
      
function mostrarMensagem(){
    desenharBloco("msg-eu", blocos.eu, 0)
    desenharBloco("msg-te", blocos.te, 2700)
    desenharBloco("msg-amo", blocos.amo, 4500)
    desenharBloco("msg-barbara", blocos.barbara, 8000)
}
