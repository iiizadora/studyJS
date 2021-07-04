const inInicio = document.querySelector('#txti')
const inFim = document.querySelector('#txtf')
const inPasso = document.querySelector('#txtp')

const resultado = document.querySelector('#resultado')
const botao = document.querySelector('#btExibir')
function contagem(){
  if(inInicio.value.length == 0||inFim.value.length == 0 || inPasso.value.length == 0){
    alert(' ERRO! Confira se todos os campos estão preenchidos')
    inicio.focus()
  }else{
    resultado.innerHTML= `Contando: <br>`
    const inicio = Number(inInicio.value)
    const fim = Number(inFim.value)
    const passo = Number(inPasso.value)
    if(passo <= 0){
      alert(' PASSO INVALIDO! Considere PASSO maior ou igual a 1')
      
    }else  if( inicio < fim){

      for(let c = inicio; c <= fim; c += passo){
        resultado.innerHTML += `${c} \u{1F449}`
      }

    }else{
      for(let c = inicio; c >= fim; c -= passo){
        resultado.innerHTML += `${c} \u{1F449}`
      }
    }

    resultado.innerHTML += ` \u{1F3C1}`
  }

}

botao.addEventListener('click',contagem)