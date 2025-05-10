//Inputs
var categoria = document.getElementById('categoria')

//Botão
var criarCategoria = document.getElementById('criarCategoria')

//Html lista
var tabelaHTML = document.getElementById('tabelaHtmlCategoria')

//LocalStorage
var categorias = JSON.parse(localStorage.getItem('categorias')) || []

function autoIncrementar(){
    id = parseInt(JSON.parse(localStorage.getItem('id'))) || 0
    id++
    localStorage.setItem('id', JSON.stringify(id))
    return id
}

function montaLista(){
    tabelaHTML.innerHTML = ''
    categorias.forEach(categoria => {
        let excluir = `<button onclick="excluir(${categoria.id})" class="btn btn-danger" type="button"><i class="bi bi-trash"></i></button>`
        tabelaHTML.innerHTML += `<tr>
                                    <td>${categoria.nome}
                                    <td class="excluir">${excluir}
                                </tr>`
    })
}

function excluir(id){
    categorias = categorias.filter((categoria) => categoria.id != id)
    localStorage.setItem('categorias', JSON.stringify(categorias))
    montaLista()
}

function limpaInput(){
    categoria.value = ''
}

montaLista()

criarCategoria.addEventListener('click', function(){
    if(categoria.value.trim() != ''){
        let id = autoIncrementar()
        categorias.push({
            'id' : id,
            'nome' : categoria.value
        })

        localStorage.setItem('categorias', JSON.stringify(categorias))
        limpaInput()
        montaLista()
    }

})