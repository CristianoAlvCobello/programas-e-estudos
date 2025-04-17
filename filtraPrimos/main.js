//Botões
var inserir = document.getElementById('inserir')
var filtrar = document.getElementById('filtrar')

//Mensagens
var MsgInseridos = document.getElementsByClassName('MsgInseridos')[0]
var MsgFiltrados = document.getElementsByClassName('MsgFiltrados')[0]

//Arrays
var numerosInseridos = []
var numerosFiltrados = []

//Inputs
var numero = document.getElementById('numero')
var ordem = document.getElementById('ordem')
var ordenarCheckbox = document.getElementById('ordenarCheckbox')

//Agrupando inputs
var grupoInputs = [ordenarCheckbox, ordem]

function ordenaNumeros(array, ordem){
    if(ordenarCheckbox.checked){
        if(ordem == 'crescente'){
            array.sort((a,b) => a - b) 
        }else if(ordem == 'decrescente'){
            array.sort((a,b) => b - a)
        }
    }
}

function mostrarMensagem(array, mensagem){
    //Resetando a mensagem
    mensagem.innerHTML = ''
    //forEach para exibir a mensagem
    array.forEach(numero => mensagem.innerHTML += `${numero} `);
}

grupoInputs.forEach(input => {
    input.addEventListener('change', function(){
        ordenaNumeros(numerosInseridos, ordem.value) 
        mostrarMensagem(numerosInseridos, MsgInseridos)
        ordenaNumeros(numerosFiltrados, ordem.value)
        mostrarMensagem(numerosFiltrados, MsgFiltrados)
    })  
})

numero.addEventListener('keydown', function(tecla){
    if (tecla.key === 'Enter') {
        tecla.preventDefault()
        inserir.click()
    }
})

inserir.addEventListener('click', function(){
    if(numero.value != ''){
        //Adiciona o Valor no Array
        numerosInseridos.push(Number(numero.value))
        ordenaNumeros(numerosInseridos, ordem.value)
        mostrarMensagem(numerosInseridos, MsgInseridos)
        //Limpa o Input para o usuário 
        numero.value = null   
    }
})

limpar.addEventListener('click', function(){
    //Limpa o Array, Input e as Mensagem
    numero.value = null
    MsgInseridos.innerHTML = ''
    MsgFiltrados.innerHTML = ''
    numerosInseridos = []
    numerosFiltrados = []
})

filtrar.addEventListener('click', function(){
    numerosFiltrados = numerosInseridos.filter((numero) => {
        //Valida se o número é inteiro e maior que 1
        if(numero > 1 && Number.isInteger(numero) == true){
            //Número primo é quando divide por 1 e por ele mesmo
            let qtdDivisores = 0
            //Esse For vai do numero 1 até o numero atual do array
            for (let contador = 1; contador <= numero; contador++) {
                //Confere se o resto da divisão é 0 e o "qtdDivisores" apenas conta quantas vezes aconteceu
                if(numero % contador == 0){
                    qtdDivisores += 1
                }
            }
            //Se "qtdDivisores" for 2 significa que só dividiu em dois números, então retorna para o novo array
            if(qtdDivisores == 2){
                return numero
            }
        }
    })
    ordenaNumeros(numerosFiltrados, ordem.value)
    mostrarMensagem(numerosFiltrados, MsgFiltrados)
})

