const inladoA= document.querySelector('#inladoA')
const inladoB= document.querySelector('#inladoB')
const inladoC= document.querySelector('#inladoC')

let outLados = document.querySelector('#outLados')
let outTipo = document.querySelector('#outTipo')


function criarLadosTrinagulos(){
 let ladoA = Number(inladoA.value);
 let ladoB = Number(inladoB.value);
 let ladoC = Number(inladoC.value);

  if(ladoA == 0 || ladoB == 0 || ladoC == 0|| isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)){
    alert('Preencha os valores corretamente!')
    inladoA.focus()
    return;
  }

  //condições para formar um triangulo
  if(ladoA> ladoB + ladoC || ladoB > ladoA + ladoC || ladoC> ladoA+ladoB){
    outLados.textContent= 'Os lados não podem formar um triângulo'
    
    
  }else{
    outLados.textContent= 'Os lados podem formar um triângulo'
    if(ladoA == ladoB && ladoA== ladoC){
      outTipo.textContent= 'Tipo:Triângulo Equilátero'
    }else if (ladoA == ladoB && ladoA== ladoC && ladoB==ladoC){

      outTipo.textContent= 'Tipo:Triângulo Isósceles'
    }else{
      outTipo.textContent= 'Tipo:Triângulo Escaleno'
    }
  }
}


const btVerificar = document.querySelector('#btVerificar')

btVerificar.addEventListener('click', criarLadosTrinagulos)