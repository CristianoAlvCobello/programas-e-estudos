//Inputs
var nome = document.getElementById('nome')
var categoria = document.getElementById('categoria')
var recorde = document.getElementById('recorde')

//Botões
var gravar = document.getElementById("gravar")

//Mensagem
var tabela = document.getElementById('tabela')

//Lista de objetos
var recordistas = JSON.parse(localStorage.getItem('recordistas')) || []

function mostraTabela(){
    tabela.innerHTML = ''

    recordistas.forEach(recordista => {
        tabela.innerHTML += `<tr>
                   <td>${recordista.nome}
                   <td>${recordista.categoria}
                   <td>${recordista.recorde}
                   <td><button type="button" onclick="excluir(${recordista.id})">Excluir</button>
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

gravar.addEventListener('click', function(){
    let id = autoIncremento()
    //Preenchendo os dados da pessoa
    recordistas.push({
        'id' : id,
        'nome' : nome.value,
        'categoria' : categoria.value,
        'recorde' : recorde.value
    })

    //Enviando ao localStorage
    localStorage.setItem('recordistas', JSON.stringify(recordistas))

    mostraTabela()
})  