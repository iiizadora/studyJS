function conferirParouImpar(){
  let inNumber = document.querySelector('#inNumber');
  let outResposta= document.querySelector('#outResposta')
  let numero = Number(inNumber.value);

  if(numero == '' || isNaN(numero)){
    alert('Por favor, preencha com um número"')
    inNumber.focus();
    return;
  }else if (numero%2 == 0){
    outResposta.textContent = `${numero} é Par`
  }else{
    outResposta.textContent =`${numero} é Ímpar`
  }
  
}

let btExibir = document.querySelector('#btExibir')
btExibir.addEventListener('click', conferirParouImpar)