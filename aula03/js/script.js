var nome = document.getElementById('nome');
var idade = document.getElementById('idade');
var cpf = document.getElementById('cpf');
var botao = document.getElementById('botao');
var msg = document.getElementsByClassName('msg')[0];

botao.addEventListener('click', function(){
    //length: conta qtd da variavel
    //split: tira algo de uma string e usa como separador
    //parseInt: converte para inteiro

    //Coloquei para ao clicar no botão já exibir
    msg.classList.add('exibir')
    msg.innerHTML = '';

    //Começa vendo se alguma está vazia
    if(nome.value == '' || idade.value == '' || cpf.value == ''){
        msg.innerHTML += '<li>Preencha todos os campos</li>';
    }else{
        msg.innerHTML = '';
    }
    
    //NOME
    //split remove os espaços vazios sobrando só palavras e length confere se tem dois
    //se quiser ter uma ideia tire o comentário abaixo
    //ExNome = 'Django Livre';
    //ExNome = ExNome.split(' ');
    //msg.innerHTML = ExNome[0];
    if(nome.value.split(' ').length < 2){
        msg.innerHTML += '<li>O nome precisa ser composto</li>';
        nome.style.backgroundColor = 'red';
        nome.style.color = 'white';
    }else{
        nome.style.backgroundColor = 'green';
        nome.style.color = 'white';

    //IDADE
    //IsNaN: Is Not a Number, não é um numéro
    //Usei else if para não cair direto no else
    }if(isNaN(parseInt(idade.value))){
        msg.innerHTML += '<li>Idade precisa ser um número</li>';
        idade.style.backgroundColor = 'red';
        idade.style.color = 'white';
    }else if(idade.value < 18 || idade.value > 60){
        msg.innerHTML += '<li>Idade deve estar entre 18 e 60 anos</li>';        
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

})