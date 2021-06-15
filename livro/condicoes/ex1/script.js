
const inNome = document.querySelector("#inNome");
const inNota1 = document.querySelector("#inNota1");
const inNota2 = document.querySelector("#inNota2");
const outMedia = document.querySelector("#outMedia");

const outSituacao = document.querySelector("#outSituacao");

function calcularMedia(){

  const nome = inNome.value;
  const nota1 = Number(inNota1.value);
  const nota2 = Number(inNota2.value);

  const media = (nota1 + nota2)/2

  //apresenta a média (altera o conteúdo do elemento outMedia)

  outMedia.textContent = "Media das notas: " + media.toFixed(1)

  //criar a condição

  if(media >= 7) {
    outSituacao.textContent = `Parabéns ${nome}! Você foi aprovado!`
    outSituacao.style.color ="blue"
  }else if (media>=4){
    outSituacao.textContent= `Atenção ${nome}, você está de Recuperação!`
    outSituacao.style.color ="green"
  }else {
    outSituacao.textContent=`Ops ${nome} você foi reprovado(a)!`
    outSituacao.style.color="red"
  }

  
}

const btResultados = document.querySelector("#btResultados");
btResultados.addEventListener("click",calcularMedia);

const btNovaConsulta = document.querySelector("#btNovaConsulta")

//Para atualizar a página
btNovaConsulta.addEventListener("click",()=>{
  document.location.reload();
})