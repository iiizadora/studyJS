let valor = document.querySelector('#inValor')
const infoTempo = document.querySelector('#outTempo')
let infoTroco = document.querySelector('#outTroco')
const btnValor = document.querySelector('#btnValor')

function calParquimetro(){
 let valores = Number(valor.value)

 if(valores == 0 || isNaN(valores)){
   alert( 'Por favor preencher com o valor corretamente!');
   valor.focus();
   return;
 }
 
 //Valor Insuficiente
 
   if( valores< 1.00){
     alert('Valor Insuficiente(no mínimo R$1.00)')
     valor.focus();
     return;
   }

   let tempo;
   let troco;

   if(valores >= 3.00){
     tempo =120;
     troco = valores -3.00;
   }else if(valores >= 1.75){
     tempo = 60;
     troco = valores - 1.75;
   }else{
     tempo = 30;
     troco = valores -1.00
   }
//Respostas na tela
   infoTempo.textContent = `Tempo: ${tempo} minutos`;

   if(troco > 0){

     infoTroco.textContent= `Troco R$: ${troco.toFixed(2)} `;
   }
}

btnValor.addEventListener('click',calParquimetro)