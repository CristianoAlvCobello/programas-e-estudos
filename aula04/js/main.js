//Variaveis Geral
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

//Variaveis de Botão
var botaoprox = document.getElementById('botaoprox');
var botaovalida = document.getElementById('botaovalida');

//Variaveis de Form e Mensagem
var cltForm = document.getElementsByClassName('cltForm')[0];
var pjForm = document.getElementsByClassName('pjForm')[0];
var msg = document.getElementsByClassName('msg')[0];

botaoprox.addEventListener('click', function(){

    if(nome.value == '' || tipo.value == 'selecione'){
        msg.innerHTML = '<li>Preencha o campo nome e sua situação</li>'
    }else{
        if(tipo.value == 'selecione'){
            pjForm.classList.add('esconder');
            cltForm.classList.add('esconder');
        }if(tipo.value == 'fisico'){
            cltForm.classList.remove('esconder');
            pjForm.classList.add('esconder');
    
        }if(tipo.value == 'juridico'){
            pjForm.classList.remove('esconder');
            cltForm.classList.add('esconder');
        }
    }
}
)

botaovalida.addEventListener('click', function(){

    msg.innerHTML = '';

//Aqui eu evito que o usuário tente validar antes de preencher o nome e se é proletário ou proletáriado 
    if(nome.value == '' || tipo.value == 'selecione'){
        msg.innerHTML += '<li>Ainda não é possivel validar</li>'
    }else{
        msg.innerHTML = ''
    }

//FISICA
//Para evitar que o usuario receba os erros de validação de Clt ou PJ antes de informar o nome ou situação 
//eu fiz com que ele verificasse como estão as classes do HTML
//Olhe para o meu HTML, se a classe "esconder" não estiver lá significa que já apareceu e o usuario já passou pelo botão anterior e pode validar
    if(cltForm.classList == 'cltForm'){
        //IDADE
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
    else if(pjForm.classList == 'pjForm'){

        //CNPJ
        if(isNaN(parseInt(cnpj.value))){
            msg.innerHTML += '<li>CNPJ precisa ser um número</li>';
            cnpj.style.backgroundColor = 'red';
            cnpj.style.color = 'white';
        }else if(cnpj.value.length != 14){
            msg.innerHTML += '<li>CNPJ deve ter 14 digitos</li>';
            cnpj.style.backgroundColor = 'red';
            cnpj.style.color = 'white';
        }else{
            cnpj.style.backgroundColor = 'green';
            cnpj.style.color = 'white';
        }

        //RG
        if(isNaN(parseInt(ie.value))){
            msg.innerHTML += '<li>RG precisa ser um número</li>';
            ie.style.backgroundColor = 'red';
            ie.style.color = 'white';
        }else if(rg.value.length != 12){
            msg.innerHTML += '<li>RG deve ter 12 digitos</li>';
            ie.style.backgroundColor = 'red';
            ie.style.color = 'white';
        }else{
            ie.style.backgroundColor = 'green';
            ie.style.color = 'white';
        }

        //NOME FANTASIOSO
        if(nomefanta.value.trim() == ''){
            msg.innerHTML += '<li>Nome Fantasioso Vazio</li>';
            nomefanta.style.backgroundColor = 'red';
            nomefanta.style.color = 'white';
        }else{
            nomefanta.style.backgroundColor = 'green';
            nomefanta.style.color = 'white';
        }
    }
})
