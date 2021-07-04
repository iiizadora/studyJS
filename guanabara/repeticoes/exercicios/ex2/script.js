const inNumero = document.querySelector('#txtn')
const botao = document.querySelector('#btExibir')

let selTab = document.querySelector('#seltab')

function calcularTabuada(){

  // validação
  if(inNumero.value.length == 0){
    alert('Por favor, digite um número!')
  }else{
    let numero = Number(inNumero.value)
    selTab.innerHTML = ''
    for(let c = 1; c <= 10;c++){
      let item = document.createElement('option')
      item.text=`${numero} x ${c} = ${numero*c}`
      selTab.appendChild(item)
    }
  }
}

botao.addEventListener('click',calcularTabuada)