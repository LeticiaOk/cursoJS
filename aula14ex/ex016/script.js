function contagem(){
  var inicio = document.getElementById('inicio').value
  var fim = document.getElementById('fim').value
  var passo = document.getElementById('passo').value
  res = document.getElementById('res')

  if(inicio == '' || fim == '' || passo == ''){
    res.innerHTML = 'Impossível contar!'
  }else{
    if(passo == '0'){
        window.alert('Passo inválido! Considerando PASSO 1')
        passo = '1'
    }
    inicio = Number(inicio)
    fim = Number(fim)
    passo  = Number(passo)
    
    if (inicio < fim){
        res.innerText = ''
        for(var i = inicio; i <= fim; i+= passo){
        res.innerHTML += `${i}  &#128073;`
    }
    }else{
        res.innerText = ''
        for(var i = inicio; i >= fim; i-= passo){
        res.innerHTML += `${i}  &#128073;`
        }
    }
    res.innerHTML += `&#127937;`
 }
    
  
}