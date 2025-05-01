var nome = document.getElementById("nome")
var email = document.getElementById("email")
var senha = document.getElementById("senha")
var nascimento = document.getElementById("nascimento")
var cadastro = document.getElementById("cadastro")
var msgErro = document.getElementsByClassName("msgErro")[0]

var pessoas = localStorage.getItem('asdas') || []

cadastro.addEventListener('submit', function(btnSalvar){
    msgErro.innerHTML = ''

    if(nome.value.trim() == ''){
        msgErro.innerHTML = "<li>Campo Nome Vazio</li>"
        btnSalvar.preventDefault()
    }

    posArroba = email.value.indexOf("@")
    posPonto = email.value.indexOf(".")
    if(posArroba <= 0 || posPonto < posArroba || posPonto == posArroba+1){
        msgErro.innerHTML += "<li>Email inválido</li>"
        btnSalvar.preventDefault()
    }

    if(senha.value.length < 12){
        msgErro.innerHTML += "<li>Senha com menos de 12 digitos</li>"
        btnSalvar.preventDefault()
    }

    let anoAtual = new Date().getFullYear()
    let anoNascimento = parseInt(nascimento.value.slice(0, 4))

    if(nascimento.value == ""){
        msgErro.innerHTML += "<li>Data de Nascimento Vázio</li>"
        btnSalvar.preventDefault()
    }if(anoNascimento < anoAtual - 118){
        msgErro.innerHTML += "<li>PARABÉNS VOCÊ É O HUMANO MAIS VELHO QUE JÁ EXISTIU</li>"
        btnSalvar.preventDefault()
    }if(anoNascimento > anoAtual - 18){
        msgErro.innerHTML += "<li>Idade menor de 18</li>"
        btnSalvar.preventDefault()
    }
})