const inNome = document.querySelector('#inNome');
  const rbMasculino = document.querySelector('#rbMasculino');
  const rbFeminino= document.querySelector('#rbFeminino');
  const inAltura =document.querySelector('#inAltura');
  const outResposta = document.querySelector('#outResposta');


function calcularPeso() {
  
  
  let nome = inNome.value;
  let masculino = rbMasculino.checked;
  let feminino = rbFeminino.checked;
  let altura = Number(inAltura.value);

  //1ª verificação: se nome foi preenchido e sexo selecionado
  if(nome == "" || (masculino == false && feminino == false)){

    alert( `Por favor, informe o nome e selecione o sexo.` );
    inNome.focus();
    return ;
  }

  //2ª verificação: se altura vazio(0) ou NaN
  if(altura == 0||isNaN(altura)){
    alert(`Por favor ${nome} , informe a altura corretamente. `)
    inAltura.focus();
    return;
  }

  //3ª verificação: conferir o sexo e realizar o calculo. Masculino ==true
  

  if(masculino){
    let calPeso;
     calPeso = 22 * Math.pow(altura,2)
  } else {
     calPeso =21 * Math.pow(altura,2)
  }

  //Resposta
  outResposta.textContent =(` ${nome} : Seu peso ideal é ${calPeso.toFixed(3)} kg `);

  }
//Calcular
const btCalcular = document.getElementById('btCalcular');

btCalcular.addEventListener("click", calcularPeso);

//limpar os dados da tela

function limparCampos(){
  location.reload();
  document.querySelector('#inNome').focus();
}

const btLimpar = document.querySelector('#btLimpar');
btLimpar.addEventListener('click',limparCampos);