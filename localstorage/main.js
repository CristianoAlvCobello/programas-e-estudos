//Inputs
var nome = document.getElementById('nome')
var categoria = document.getElementById('categoria')
var recorde = document.getElementById('recorde')

//Botões
var gravar = document.getElementById("gravar")

//Mensagem
var tabela = document.getElementById('tabela')
var msgErro = document.getElementById('msgErro')

//Lista de objetos
var recordistas = JSON.parse(localStorage.getItem('recordistas')) || []

function mostraTabela(){
    tabela.innerHTML = ''

    recordistas.forEach(recordista => {
        tabela.innerHTML += `<tr>
                   <td>${recordista.nome}
                   <td>${recordista.categoria}
                   <td>${recordista.recorde}
                   <td><button class="excluir" type="button" onclick="excluir(${recordista.id})">Excluir</button>
                   </td>
                   `
    })
}

function autoIncremento(){
    //Verifica se tem no localStorage, se não tiver recebe 0 
    let id = parseInt(localStorage.getItem('id')) || 0
    //Forma simplificada de dizer id = id + 1
    id++ 
    //Devolve no localStorage o valor adicionado
    localStorage.setItem('id', JSON.stringify(id)) 
    return id
}

function excluir(id){
    //Percorre o array e cria um com os dados de ID diferente
    recordistas = recordistas.filter((recordista) => recordista.id != id)
    localStorage.setItem('recordistas', JSON.stringify(recordistas))
    //Mostra a tabela de novo pois é uma nova
    mostraTabela()
}

function limpaInputs(){
    nome.value = ''
    recorde.value = ''
}

mostraTabela()

nome.addEventListener('keydown', function (tecla){
    if (tecla.key === 'Enter') {
        gravar.click()
    }
})
recorde.addEventListener('keydown', function (tecla){
    if (tecla.key === 'Enter') {
        gravar.click()
    }
})

gravar.addEventListener('click', function(){
    msgErro.innerHTML = ''
    let RecordistaCategoriaIgual = recordistas.find((recordista) => recordista.categoria == categoria.value)

    if(nome.value.trim() == ''){
        msgErro.innerHTML += "<li>Nome Vazio"
    }if(recorde.value.trim() == ''){
        msgErro.innerHTML += "<li>Recorde Incompleto"
    }else if(isNaN(recorde.value) || recorde.value <= 0){
        msgErro.innerHTML += "<li>Recorde Inválido"
    }if(RecordistaCategoriaIgual){
        if(RecordistaCategoriaIgual.recorde <= parseFloat(recorde.value)){
            msgErro.innerHTML += `<li>Recorde ${categoria.value} deve ser menor`
        }
    }
    
    if(msgErro.innerHTML == ''){

        if(RecordistaCategoriaIgual){
            recordistas.filter((recordista) => {
                if(recordista.categoria == categoria.value){
                    recordista.nome = nome.value
                    recordista.recorde = recorde.value
                }
                return recordista
            })
        }
        else{
            let id = autoIncremento()
            recordistas.push({
                'id' : id,
                'nome' : nome.value,
                'categoria' : categoria.value,
                'recorde' : recorde.value
            })
        }

        //Enviando ao localStorage
        localStorage.setItem('recordistas', JSON.stringify(recordistas))
        mostraTabela()
        limpaInputs()
    }
})  