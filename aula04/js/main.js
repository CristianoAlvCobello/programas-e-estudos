var nome = document.getElementById('nome');
var tipo = document.getElementById('tipo');
//Variaveis do CLT
var cpf = document.getElementById('cpf');
var rg = document.getElementById('rg');
var idade = document.getElementById('idade');

//Variaveis do PJ
var cnpj = document.getElementById('cnpj');
var ie = document.getElementById('ie');
var nomefanta = document.getElementById('nomefanta');

//Variaveis para exibição e envio
var botaoprox = document.getElementById('botaoprox');
var botaovalida = document.getElementById('botaovalida');
var cltForm = document.getElementsByClassName('cltForm')[0];
var pjForm = document.getElementsByClassName('pjForm')[0];
var msg = document.getElementsByClassName('msg')[0];

botaoprox.addEventListener('click', function(){

    if(nome.value == ''){
        msg.innerHTML = 'Preencha o campo nome'
    }else{
        if(tipo.value == 'selecione'){
            pjForm.classList.add('esconder')
            cltForm.classList.add('esconder')
        }if(tipo.value == 'fisico'){
            cltForm.classList.remove('esconder')
            pjForm.classList.add('esconder')
    
        }if(tipo.value == 'juridico'){
            pjForm.classList.remove('esconder')
            cltForm.classList.add('esconder')
        }
    }
}
)

botaovalida.addEventListener('click', function(){
    msg.innerHTML = '';

//FISICA

    //IDADE
    if(tipo.value == 'fisico'){
        if(isNaN(parseInt(idade.value))){
            msg.innerHTML += '<li>Idade precisa ser um número</li>';
            idade.style.backgroundColor = 'red';
            idade.style.color = 'white';
        }else if(idade.value <= 18){
            msg.innerHTML += '<li>Idade ser maior que 18</li>';        
            idade.style.backgroundColor = 'red';
            idade.style.color = 'white';
        }else{
            idade.style.backgroundColor = 'green';
            idade.style.color = 'white';
        }

        //CPF
        if(isNaN(parseInt(cpf.value))){
            msg.innerHTML += '<li>CPF precisa ser um número</li>';
            cpf.style.backgroundColor = 'red';
            cpf.style.color = 'white';
        }else if(cpf.value.length != 11){
            msg.innerHTML += '<li>CPF deve ter 11 digitos</li>';
            cpf.style.backgroundColor = 'red';
            cpf.style.color = 'white';
        }else{
            cpf.style.backgroundColor = 'green';
            cpf.style.color = 'white';
        }

        //RG
        if(isNaN(parseInt(rg.value))){
            msg.innerHTML += '<li>RG precisa ser um número</li>';
            rg.style.backgroundColor = 'red';
            rg.style.color = 'white';
        }else if(rg.value.length != 10){
            msg.innerHTML += '<li>RG deve ter 11 digitos</li>';
            rg.style.backgroundColor = 'red';
            rg.style.color = 'white';
        }else{
            rg.style.backgroundColor = 'green';
            rg.style.color = 'white';
        }
    }

//JURIDICA
    else if(tipo.value == 'juridica'){
        if(isNaN(parseInt(idade.value))){
            msg.innerHTML += '<li>Idade precisa ser um número</li>';
            idade.style.backgroundColor = 'red';
            idade.style.color = 'white';
        }else if(idade.value <= 18){
            msg.innerHTML += '<li>Idade ser maior que 18</li>';        
            idade.style.backgroundColor = 'red';
            idade.style.color = 'white';
        }else{
            idade.style.backgroundColor = 'green';
            idade.style.color = 'white';
        }

        //CNPJ
        if(isNaN(parseInt(cnpj.value))){
            msg.innerHTML += '<li>CPF precisa ser um número</li>';
            cnpj.style.backgroundColor = 'red';
            cnpj.style.color = 'white';
        }else if(cpf.value.length != 14){
            msg.innerHTML += '<li>CPF deve ter 11 digitos</li>';
            cnpj.style.backgroundColor = 'red';
            cnpj.style.color = 'white';
        }else{
            cnpj.style.backgroundColor = 'green';
            cnpj.style.color = 'white';
        }

        //RG
        if(isNaN(parseInt(ie.value))){
            msg.innerHTML += '<li>RG precisa ser um número</li>';
            rg.style.backgroundColor = 'red';
            rg.style.color = 'white';
        }else if(ie.value.length != 12){
            msg.innerHTML += '<li>RG deve ter 11 digitos</li>';
            rg.style.backgroundColor = 'red';
            rg.style.color = 'white';
        }else{
            rg.style.backgroundColor = 'green';
            rg.style.color = 'white';
        }
    }

})
