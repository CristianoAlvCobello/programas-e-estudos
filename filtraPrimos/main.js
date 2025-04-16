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

//CheckBox
var ordenarCheckbox = document.getElementById('ordenarCheckox')

inserir.addEventListener('click', function(){
    if(numero.value != ''){
        //Adiciona o Valor no Array
        numerosInseridos.push(Number(numero.value))
        MsgInseridos.innerHTML += `${numero.value} `

        //Limpa o Input para o usuário 
        numero.value = null   
    }
    //Limpando a Mensagem a cada número adicionado
    MsgInseridos.innerHTML = ''
    //Função que ordena numeros
    numerosInseridos.sort((a, b) => a - b)
    //forEach para exibir a mensagem
    numerosInseridos.forEach(numero => MsgInseridos.innerHTML += `${numero} `);
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
    //Limpando a Mensagem a cada número adicionado
    MsgFiltrados.innerHTML = ''
    //Função que ordena numeros
    numerosFiltrados.sort((a, b) => a - b)
    //forEach para exibir a mensagem
    numerosFiltrados.forEach(numero => MsgFiltrados.innerHTML += `${numero} `);
})

