//Inputs
var tarefa = document.getElementById('tarefa')

//Botão
var adicionar = document.getElementById('adicionar')

//Select para filtrar
var filtro = document.getElementById('filtro')

//Html lista
var tabelaHTML = document.getElementById('tabelaHtml')

//LocalStorage
var listaDeTarefas = JSON.parse(localStorage.getItem('listaDeTarefas')) || []

function autoIncrementar(){
    id = parseInt(JSON.parse(localStorage.getItem('id'))) || 0
    id++
    localStorage.setItem('id', JSON.stringify(id))
    return id
}

function montaLista(){
    if(filtro.value == 'concluidas'){
        lista = listaDeTarefas.filter((tarefa) => tarefa.concluido == true)
    }else if(filtro.value == 'pendentes'){
        lista = listaDeTarefas.filter((tarefa) => tarefa.concluido == false)
    }else{
        lista = [...listaDeTarefas]
    }

    tabelaHTML.innerHTML = ''
    lista.forEach(tarefa => {
        let checkbox = `<input onchange="alteraStatus(${tarefa.id})" class="checkbox" type="checkbox"></input>`
        let excluir = `<button onclick="excluir(${tarefa.id})" class="btn btn-danger" type="button"><i class="bi bi-trash"></i></button>`
        if(tarefa.concluido == true){
            checkbox = `<input onchange="alteraStatus(${tarefa.id})" type="checkbox" checked></input>`
        }
        tabelaHTML.innerHTML += `<tr>
                                    <td class="tdcheckbox">${checkbox}
                                    <td>${tarefa.tarefa}
                                    <td class="excluir">${excluir}
                                </tr>`
    })
}

function excluir(id){
    listaDeTarefas = listaDeTarefas.filter((tarefa) => tarefa.id != id)
    localStorage.setItem('listaDeTarefas', JSON.stringify(listaDeTarefas))
    montaLista()
}

function limpaInput(){
    tarefa.value = ''
}

function alteraStatus(id){
    listaDeTarefas.forEach(tarefa => {
        if(tarefa.id == id){
            tarefa.concluido = !tarefa.concluido
        }
    })
    localStorage.setItem('listaDeTarefas', JSON.stringify(listaDeTarefas))
    montaLista()
}

montaLista()

tarefa.addEventListener('keydown', function(tecla){
    if(tecla.key == 'Enter'){
        adicionar.click()
    }
})

adicionar.addEventListener('click', function(){
    let id = autoIncrementar()

    if(tarefa.value.trim() != ''){
        listaDeTarefas.push({
            "id" : id,
            "tarefa" : tarefa.value,
            "categoria" : false
        })
    }

    localStorage.setItem('listaDeTarefas', JSON.stringify(listaDeTarefas))

    limpaInput()
    montaLista()
})
