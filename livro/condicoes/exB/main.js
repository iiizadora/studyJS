function verificarVel(){

  const velPermitida = document.querySelector('#inVelPermitida')
  const velCondutor = document.querySelector('#inVelCondutor')

  let resposta = document.querySelector('#outResposta')

  const velCondutores = Number(velCondutor.value)
  const velPermitidas = Number(velPermitida.value)

  

  if(velPermitidas== '' && velCondutores == ''){
    alert('Por favor, preencha os dados corretamente!')
    velPermitida.focus()
    return
  }else{
    let velMaisVinte = velPermitidas*1.2

    if(velCondutores <= velPermitidas){
      resposta.textContent = 'Sem multa!'
  
    }else if(velCondutores <= velMaisVinte){
  
      resposta.textContent= 'Multa leve!'
  
    }else {
      resposta.textContent= 'Multa grave!'
    }
  }


}

const btVerificar= document.querySelector('#btExibirVel')
btVerificar.addEventListener('click', verificarVel)