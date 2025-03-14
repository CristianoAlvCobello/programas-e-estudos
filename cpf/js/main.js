var cpf = document.getElementById('cpf')
var validar = document.getElementById('validar')
var gerar = document.getElementById('gerar')
var acharValidadores = document.getElementById('acharValidadores')
var msg = document.getElementsByClassName('msg')[0]

function validador1(cpf){
    let multiplicacao = 0
    let contador = 0
    let soma = 0
    let verificador1 = 0

    for(let indice = 10; indice >= 2; indice--) {
        multiplicacao = parseInt(cpf[contador]) * indice
        soma += multiplicacao
        contador ++
    }if(soma % 11 >= 2){
        verificador1 = 11 - soma % 11
    }

    return verificador1
}

function validador2(cpf){
    let multiplicacao = 0
    let contador = 1
    let soma = 0
    let verificador2 = 0

    for(let indice = 10; indice >= 2; indice--) {
        multiplicacao = parseInt(cpf[contador]) * indice
        soma += multiplicacao
        contador ++
    }if(soma % 11 >= 2){
        verificador2 = 11 - soma % 11
    }

    return verificador2
}

function formataCPF(cpf){
    return cpf.trim().replaceAll(/[.\,\-\s]/g, '')
}

validar.addEventListener('click', function(){
    msg.classList.remove('esconder')
    let cpfFormatado = formataCPF(cpf.value)
    
    if(cpfFormatado.length == 11){

        //PRIMEIRO VERIFICADOR
        primeiroVerificador = validador1(cpfFormatado)

        //SEGUNDO VERIFICADOR 
        segundoVerificador = validador2(cpfFormatado)

        if(cpfFormatado[9] == primeiroVerificador && cpfFormatado[10] == segundoVerificador){
            msg.innerHTML = 'CPF Válido'
        }else{
            msg.innerHTML = 'CPF Inválido'
        }
    }else{
        msg.innerHTML = 'Digite os 11 digitos do CPF'
    }
})

gerar.addEventListener('click', function(){
    msg.classList.remove('esconder')
    let cpf = ''

    //Gera 9 números para o CPF
    for (let indice = 0; indice <= 8; indice++) {
        cpf += Math.floor(Math.random() * 9);
    }

    msg.innerHTML = cpf
    
    //PRIMEIRO VERIFICADOR
    //Concateno na string cpf o primeiro digito verificador
    cpf += validador1(cpf)
    cpf += validador2(cpf)
    
    msg.innerHTML = cpf
})

acharValidadores.addEventListener('click', function(){
    msg.classList.remove('esconder')
    let cpfFormatado = formataCPF(cpf.value)
    let resposta = ''

    if(cpfFormatado.length == 9){
        resposta += validador1(cpfFormatado)
        //Tem que adicionar ao cpfFormatado para o segundo validador funcionar
        cpfFormatado += validador1(cpfFormatado)
        resposta += validador2(cpfFormatado)
        msg.innerHTML = resposta
    }else{
        msg.innerHTML = 'Digite apenas 9 digitos'
    }
})

