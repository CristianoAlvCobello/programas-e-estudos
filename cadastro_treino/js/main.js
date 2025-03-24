//Inputs
var nome = document.getElementById('nome')
var cpf = document.getElementById('cpf')
var rg = document.getElementById('rg')
var idade = document.getElementById('idade')
var ie = document.getElementById('ie')
var nomeFantasia = document.getElementById('nomeFantasia')

var msg = document.getElementsByClassName('msg')[0]
var selecionar = document. getElementById('selecionar')

//Botões
var proximo = document.getElementById('proximo')
var validar = document.getElementById('validar')

//Formularios
var pjForm = document.getElementsByClassName('pj')[0]
var pfForm = document.getElementsByClassName('pf')[0]

function validaRG(rg){
    let multiplicacao = 0
    let indice = 0
    let soma = 0
    let verificador = 0

    for(let contador = 9; contador >= 2; contador--) {
        multiplicacao = parseInt(rg[indice]) * contador
        soma += multiplicacao
        indice ++
    }

    verificador = soma % 11
    if(rg[8] == verificador){
        return true
    }else{
        return false
    }
}

function validaCPF(cpf){
    let multiplicacao = 0
    let indice = 0
    let soma = 0
    let verificador1 = 0
    let verificador2 = 0

    for(let contador = 10; contador >= 2; contador--) {
        multiplicacao = parseInt(cpf[indice]) * contador
        soma += multiplicacao
        indice ++
    }if(soma % 11 >= 2){
        verificador1 = 11 - soma % 11
    }

    multiplicacao = 0
    indice = 1
    soma = 0

    for(let contador = 10; contador >= 2; contador--) {
        multiplicacao = parseInt(cpf[indice]) * contador
        soma += multiplicacao
        indice ++
    }if(soma % 11 >= 2){
        verificador2 = 11 - soma % 11
    }

    if(cpf[9] == verificador1 && cpf[10] == verificador2){
        return true
    }else{
        return false
    }
}

function validaCNPJ(cnpj){
    let multiplicacao = 0
    let multiplicador = 6
    let indice = 0
    let soma = 0

    for(let contador = 0; contador <= 11; contador++) {
        if(indice == 4){
            multiplicador = 2
        }
        multiplicacao = parseInt(cnpj[indice]) * multiplicador
        soma += multiplicacao
        indice ++
        multiplicador ++
    }
    verificador1 = soma % 11

    multiplicacao = 0
    multiplicador = 5
    indice = 0
    soma = 0

    for(let contador = 0; contador <= 12; contador++) {
        if(indice == 5){
            multiplicador = 2
        }
        multiplicacao = parseInt(cnpj[indice]) * multiplicador
        soma += multiplicacao
        indice ++
        multiplicador ++
    }
    verificador2 = soma % 11

    if(cnpj[12] == verificador1 && cnpj[13] == verificador2){
        return true
    }else{
        return false
    }
}

function ValidaIE(ie){
    let multiplicacao = 0
    let multiplicador = 1
    let soma = 0
    let verificador1 = 0
    let verificador2 = 0

    for(let indice = 0; indice <= 8; indice++) {
        if(multiplicador == 2 || multiplicador == 9){
            multiplicador++
        }
        multiplicacao = parseInt(ie[indice]) * multiplicador
        soma += multiplicacao
        multiplicador ++
    } 
     if(soma % 11 < 2){
        verificador1 = 11 - soma % 11
    }

    multiplicacao = 0
    multiplicador = 2
    soma = 0

    for(let indice = 10; indice >= 0; indice--) {
        if(multiplicador == 11){
            multiplicador = 2
        }
        multiplicacao = parseInt(ie[indice]) * multiplicador
        soma += multiplicacao
        multiplicador ++
    }
    verificador2 = soma % 11

    if(ie[8] == verificador1 && ie[11] == verificador2){
        return true
    }else{
        return verificador2
    }
}

function limpaString(string){
    return string.trim().replaceAll(/[.\,\-\s\/]/g, '')
}

function formataString(string, tipo){
    if(tipo == 'cpf'){
        string = string.slice(0, 3) + '.' + string.slice(3, 6) + '.' + string.slice(6, 9) + '-' + string.slice(9)
    }else if(tipo == 'rg'){
        string = string.slice(0, 2) + '.' + string.slice(2, 5) + '.' + string.slice(5, 8) + '-' + string.slice(8)
    }else if(tipo == 'cnpj'){
        string = string.slice(0, 2) + '.' + string.slice(2, 5) + '.' + string.slice(5, 8) + '/' + string.slice(8, 12) + '-' + string.slice(12)
    }
    return string
}

proximo.addEventListener('click', function(){

    msg.innerHTML = ''
    // let algo = '110042490114'
    // msg.innerHTML = ValidaIE(algo)
    pfForm.classList.add('esconder')
    pjForm.classList.add('esconder')

    if(selecionar.value == 'fisica' && nome.value.trim() != ''){
        pfForm.classList.remove('esconder')
    }else if(selecionar.value == 'juridica' && nome.value.trim() != ''){
        pjForm.classList.remove('esconder')
    }

})

validar.addEventListener('click', function(){

    msg.innerHTML = ''
    
    if(pfForm.classList == 'pf'){
        //Aqui limpa para restar apenas os números
        let cpfLimpo = limpaString(cpf.value)
        let rgLimpo = limpaString(rg.value)

        //CPF
        if(cpfLimpo.length != 11){
            msg.innerHTML += '<li>CPF Incompleto</li>'
        }else if(validaCPF(cpfLimpo) == false){
            msg.innerHTML += '<li>CPF Inválido</li>'
        }else{
            cpf.value = formataString(cpfLimpo, 'cpf')
        }
        //RG
        if(rgLimpo.length != 9){
            msg.innerHTML += '<li>RG Incompleto</li>'
        }else if(validaRG(rgLimpo) == false){
            msg.innerHTML += '<li>RG Inválido</li>'
        }else{
            rg.value = formataString(rgLimpo, 'rg')
        }
        //Idade
        if(isNaN(idade.value) || idade.value.trim() == ''){
            msg.innerHTML += '<li>Informe sua idade</li>'
        }else if(parseInt(idade.value) < 18){
            msg.innerHTML += '<li>Idade menor de 18</li>'
        }
        if(msg.innerHTML == ''){
            msg.innerHTML = '<li>Todos Os Dados São Válidos</li>'
        }
    }

    if(pjForm.classList == 'pj'){
        let cnpjLimpo = limpaString(cnpj.value)
        let ieLimpo = limpaString(ie.value)

        //CNPJ
        if(cnpjLimpo.length != 14){
            msg.innerHTML += '<li>CNPJ Incompleto</li>'
        }else if(validaCNPJ(cnpjLimpo) == false){
            msg.innerHTML += '<li>CNPJ Inválido</li>'
        }else{
            cnpj.value = formataString(cnpjLimpo, 'cnpj')
        }
        //Nome Fantasia
        if(nomeFantasia.value.trim() == ''){
            msg.innerHTML += '<li>Nome Fantasia Vázio</li>'
        }
        //IE
        if(ieLimpo.length != 12){
            msg.innerHTML += '<li>IE Incompleto</li>'
        }else if(ValidaIE(ieLimpo) == false){
            msg.innerHTML += '<li>IE Inválido</li>'
        }else{
            formataString(ieLimpo, 'ie')
        }
        //Caso tudo esteja correto
        if(msg.innerHTML == ''){
            msg.innerHTML = '<li>Todos Os Dados São Válidos</li>'
        }
    }

})