var lista = []
function adicionar(){
    resp.innerHTML = ''
    var txtn = document.getElementById('txtn').value
    var item = document.createElement('option')

    if (txtn.length == 0 || txtn > 100 || lista.indexOf(txtn) != -1){
        alert('Valor inválido ou já encontrado na lista')
    }else{
        lista.push(txtn)
        item.text = `Valor ${txtn} adicionado`
        valores.appendChild(item)
    }
}

function finalizar(){ 
    if(lista.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        var resp = document.getElementById('resp')
        resp.innerHTML += `<p>Ao todo temos ${lista.length} números cadastrados</p>`

        lista.sort()
        resp.innerHTML += `<p>O maior valor informado foi ${lista[lista.length - 1]}</p>`

        resp.innerHTML += `<p>O menor valor informado foi ${lista[0]}</p>`
        
        soma = 0
        for(let pos in lista){
            soma += Number(lista[pos])
        }

        resp.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        resp.innerHTML += `<p>A média dos valores digitados é ${soma/lista.length}</p>`
    }
    
}
