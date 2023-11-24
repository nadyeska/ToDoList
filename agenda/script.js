const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const lista = document.querySelector('.list-task');

let minhalista = []

function addNovaTarefa() {
    minhalista.push({ 
        tarefa: input.value,
        concluida: false,
})

    input.value = ''
    mostrarTarefas()

}

function mostrarTarefas() {
    let novali = ''
       

    minhalista.forEach((item,posicao) => {
         novali =
            novali +

            `
                <li class="task ${item.concluida &&' done'}">
                    <img src ="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})"></img>
 
                    <img src ="./img/lixo.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})>
                
                </li>
             `

    })

    lista.innerHTML = novali
    localStorage.setItem('lista', JSON.stringify(minhaLista))
}

function concluirTarefa(posicao){
    minhaLista(posicao).concluida = !minhaLista(posicao).concluida
    mostrarTarefas()
}

function deletarItem(posicao){
    minhaLista.splice(posicao,1)
    mostrarTarefas()
}

function recarregarTarefas(posicao){
    const tarefasLocalStrorage = localStorage.getItem('lista')
    if(tarefasLocalStrorage){
        minhaLista = JSON.parse(tarefasLocalStrorage)
    }
}

recarregarTarefas()
button.addEventListener('click', addNovaTarefa)