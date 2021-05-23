/*Criar um script que calcula a média (e adiciona ao objeto) a partir de um array de notas e de console.log com o padrão `O aluno Ricardo teve média 8 */

const alunos = [
  { nome: "Jaja", notas: [10, 5, 10, 5] },
  { nome: "Breno", notas: [8, 5, 2, 3] },
  { nome: "Ana", notas: [4, 10, 9, 7] },
  { nome: "Rodrigo", notas: [8, 10, 3, 5] },
  { nome: "Vitor", notas: [5, 10, 10, 2] },
];



alunos.forEach((aluno,index)=>{
  let totalSoma = 0;
  for ( let mediaCalculada of aluno.notas){
    totalSoma += mediaCalculada;
  }
    const totalMedia = totalSoma/aluno.notas.length;
  console.log(totalMedia);
});






// alunos.forEach((media) => {
//  let soma =0;
//  for (let mediA of media.notas){
//    soma += mediA;
//  }
//  let totMedia = soma/ media.notas.length;
//  console.log(alunos.media);
// });
 

