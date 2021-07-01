function calcularFuso() {
  let inHoraBrasil = document.querySelector('#inHoraBrasil');
  let outHoraFranca = document.querySelector('#outHoraFranca');

  let horaBrasil = Number(inHoraBrasil.value)

  // verificação para ver se preencheu ou não,e se é um número mesmo 

  if(inHoraBrasil.value =='' || isNaN(horaBrasil)){

    alert('Informe a hora no Brasil corretamente')
    
    inHoraBrasil.focus();
    return
  }

  const horaFranca = horaBrasil +5

  //se passar das 24h na França

  if(horaFranca> 24){
    horaFranca = horaFranca-24
  }

  outHoraFranca.textContent = horaFranca.toFixed(2)

}

let btExibir= document.querySelector('#btExibir')
btExibir.addEventListener('click',calcularFuso)

