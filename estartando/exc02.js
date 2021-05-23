const alunos = [
  { nome: "Jaja", notas: [10, 5, 10, 5] },
  { nome: "Breno", notas: [8, 5, 2, 3] },
  { nome: "Ana", notas: [4, 10, 9, 7] },
  { nome: "Rodrigo", notas: [8, 10, 3, 5] },
  { nome: "Vitor", notas: [5, 10, 10, 2] },
];

const mediaNota = alunos.map((aluno) => {
//console.log(aluno.notas)

alunos.forEach((estudante,index)=>{
  let totalSoma = 0;
  for ( let media of estudante.notas){
    totalSoma += media;
  }
    totalMedia = totalSoma/estudante.notas.length;
  //console.log(totalMedia);
  
});  
  console.log(`O aluno ${aluno.nome} obteve a média de ${totalMedia}`);
  
});