//Inputs
var tarefa = document.getElementById('tarefa')

//Botão
var gravar = document.getElementById('gravar')

//Select para filtrar
var filtro = document.getElementById('filtro')

//Html lista
var tabelaHTML = document.getElementById('tabelaHtml')
var categoriasSelect = document.getElementsByClassName('categoriasSelect')[0]
var alert = document.getElementsByClassName('alert')[0]

//LocalStorage
var listaDeTarefas = JSON.parse(localStorage.getItem('listaDeTarefas')) || []
var categorias = JSON.parse(localStorage.getItem('categorias')) || []

function autoIncrementar(){
    id = parseInt(JSON.parse(localStorage.getItem('id'))) || 0
    id++
    localStorage.setItem('id', JSON.stringify(id))
    return id
}

function montaLista(lista){
    let titulo = document.getElementById('titulo')
    titulo.innerHTML = 'Lista de Tarefas'
    
    if(categoriasSelect.value != 'sem categoria'){
        titulo.innerHTML += ` - ${categoriasSelect.value}`
    }

    if(filtro.value == 'concluidas'){
        lista = listaDeTarefas.filter((tarefa) => tarefa.concluido == true)
    }else if(filtro.value == 'pendentes'){
        lista = listaDeTarefas.filter((tarefa) => tarefa.concluido == false)
    }else{
        lista = [...listaDeTarefas]
    }

    if(categoriasSelect.value != 'sem categoria'){
        lista = lista.filter((tarefa) => tarefa.categoria  == categoriasSelect.value)
    }

    tabelaHTML.innerHTML = ''
    lista.forEach(tarefa => {
        let checkbox = `<td class="tdcheckbox bg-warning"><input onchange="alteraStatus(${tarefa.id})" class="checkbox" type="checkbox"></input>`
        let excluir = `<button onclick="excluir(${tarefa.id})" class="btn btn-danger" type="button"><i class="bi bi-trash"></i></button>`
        if(tarefa.concluido == true){
            checkbox = `<td class="tdcheckbox bg-success"><input onchange="alteraStatus(${tarefa.id})" type="checkbox" checked></input>`
        }
        tabelaHTML.innerHTML += `<tr>
                                    ${checkbox}
                                    <td>${tarefa.tarefa}
                                    <td class="excluir">${excluir}
                                </tr>`
    })
}

function montaSelect(){
    if(categorias.length > 0){
        categoriasSelect.classList.remove('d-none')
        categorias.forEach(categoria => {
            let option = `<option value="${categoria.nome}">${categoria.nome}</option>`
            categoriasSelect.innerHTML += option
        })
    }
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
montaSelect()

tarefa.addEventListener('keydown', function(tecla){
    if(tecla.key == 'Enter'){
        gravar.click()
        tecla.preventDefault()
    }
})

gravar.addEventListener('click', function(){
    alert.classList.add('d-none')
    alert.innerHTML = "Preencha uma tarefa"
    if(tarefa.value.trim() != ''){
        let id = autoIncrementar()
        listaDeTarefas.push({
            "id" : id,
            "tarefa" : tarefa.value,
            "concluido" : false,
            "categoria" : categoriasSelect.value
        })
        localStorage.setItem('listaDeTarefas', JSON.stringify(listaDeTarefas))
        limpaInput()
        montaLista()
    }else{
        alert.classList.remove('d-none')
        alert.innerHTML = "Anote uma tarefa"
    }
})
