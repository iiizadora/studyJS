// var pais = 'Brasil'
// if (pais == 'Brasil') {
//   console.log('Brasileiro!')
// } else {
//   console.log('Estrangeiro!')
// }


/*
Condição Aninhada 
*/

var idade = 40

console.log(`Você tem ${idade} anos. `)
if(idade < 16){
  console.log('Não vota')

}else if(idade < 18 || idade>65){
  console.log('Voto opcional')
}else {
  console.log('É obrigado a votar')
}
