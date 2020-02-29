const API = 'http://localhost:3000'

const createButton = (title, type, icon) => {
    return $('<button>').addClass(`btn btn-${type}`).prop('title', title)
    .append($('<span>').addClass(`glyphicon glyphicon-${icon}`))
}

const getAtivos = () => {
    $.ajax({
        url: `${API}/ativos`,
        success: ativos => {
            renderRows(ativos)
            $('[name]').val('')
        }
    })
}

const renderRows = ativos => {
    const rows = ativos.map(ativo => {
        const updateButton = createButton('Atualizar', 'warning', 'pencil')
        updateButton.click(() => loadAtivo(ativo))

        const removeButton = createButton('Excluir', 'danger', 'trash')
        removeButton.click(() => removeAtivo(ativo))

        return $('<tr>')
            .append($('<td>').append(ativo.codigo))
            .append($('<td>').append(ativo.descricao))
            .append($('<td>').append(updateButton).append(removeButton))
    })

    $('#ativosRows').html(rows)
}

const loadAtivo = ativo => {
    $('[name=id]').val(ativo._id)
    $('[name=codigo]').val(ativo.codigo)
    $('[name=descricao]').val(ativo.descricao)
}


const removeAtivo = ativo => {
    $.ajax({
        method: 'DELETE',
        url: `${API}/ativos/${ativo._id}`,
        success: getAtivos
    })
}

const saveAtivo = () => {
    const _id = $('[name=id]').val()
    const codigo = $('[name=codigo]').val()
    const descricao = $('[name=descricao]').val()
    $.ajax({
        method: _id ? 'PUT' : 'POST',
        url: `${API}/ativos/${_id}`,
        data: _id ? { _id, codigo, descricao } : { codigo, descricao },
        success: getAtivos
    })
}

$(() => {
    getAtivos()
    $('[save]').click(saveAtivo)
})