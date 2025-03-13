var cpf = document.getElementById('cpf')
var botao = document.getElementById('botao')
var botaogerar = document.getElementById('botaogerar')
var msg = document.getElementsByClassName('msg')[0]

botao.addEventListener('click', function(){
    let cpfFormatado = cpf.value.trim().replaceAll(/[.\,\-\s]/g, '')
    
    if(cpfFormatado.length == 11){
        let multiplicacao = 0
        let contador = 0
        let soma = 0
        let verificador1 = 0
        let verificador2 = 0

        //PRIMEIRO VERIFICADOR
        for(let indice = 10; indice >= 2; indice--) {
            multiplicacao = parseInt(cpfFormatado[contador]) * indice
            soma += multiplicacao
            contador ++
        }if(soma % 11 >= 2){
            verificador1 = 11 - soma % 11
        }

        //SEGUNDO VERIFICADOR 
        multiplicacao = 0
        contador = 1 //começa em 1 agora pq precisa ir apartir do segundo digito
        soma = 0
        for (let indice = 10; indice >= 2; indice--) {
            multiplicacao = parseInt(cpfFormatado[contador]) * indice
            soma += multiplicacao
            contador ++
        }if(soma % 11 >= 2){
            verificador2 = 11 - soma % 11
        }

        if(cpfFormatado[9] == verificador1 && cpfFormatado[10] == verificador2){
            msg.innerHTML = 'CPF Válido'
        }else{
            msg.innerHTML = 'CPF Inválido'
        }
    }
    
})