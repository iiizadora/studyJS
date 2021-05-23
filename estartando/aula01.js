// //forEach
// //

// // const alunos = ["Breno", "Sergio", "Pedro"];

// // alunos.forEach((aluno, index, alunos) => {
// //   if (index +1 === alunos.length) console.log(`Você ta atrasado, hein ${aluno}`);
// //   else console.log(`Boa noite, ${aluno}`);
// // });


// // map


const transacoes = [
  { valor: 400, tipo: "credito" },
  { valor: 100, tipo: "debito" },
  { valor: 200, tipo: "debito" },
  { valor: 300, tipo: "debito" },
  { valor: 500, tipo: "credito" },
];

const addImposto = (transacao, index, transacoes) => {
  if (transacao.tipo === "debito") {
    const imposto = transacao.valor * 0.1;
    return { valor: transacao.valor + imposto, tipo: transacao.tipo };
  }
  return transacao;
};

const transacoesComImposto = transacoes.map(addImposto);

// console.log(typeof(transacoesComImposto));

// // const resultado = [];
// // for (const transacao of transacoes) {
// //   resultado.push(addImposto(transacao));
// // }

// console.log(transacoesComImposto);
// // console.log(resultado);

// // //filter


// // const transacoes = [
// //   { valor: 400, tipo: "credito" },
// //   { valor: 100, tipo: "debito" },
// //   { valor: 200, tipo: "debito" },
// //   { valor: 300, tipo: "debito" },
// //   { valor: 500, tipo: "credito" },
// // ];
// // const dinheirosAMais = transacoes.filter((transacao, index, transacoes) => {
// //   return transacao.tipo === "credito";
// // });

// // console.log(dinheirosAMais);

