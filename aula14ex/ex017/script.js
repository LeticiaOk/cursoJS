function tabuada(){
    let numero = document.getElementById('numero').value
    numero = Number(numero)
    let tabuada = document.getElementById('tabuada')

    tabuada.innerHTML = ''
    for(var i = 1; i <= 10; i++){
        // texto.innerHTML +=`${numero} x ${i} = ${numero * i}`
        let item = document.createElement('option')
        item.text = `${numero} x ${i} = ${numero * i}`
        tabuada.appendChild(item)
    }
}