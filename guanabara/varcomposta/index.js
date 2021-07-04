let valores = [8,1,7,4,2,9];
console.log(valores);
/*
for(let position =0; position<valores.length;position++){
  console.log(`A posição ${position} tem o valor ${valores[position]}`)
}
*/

for(let position in valores){
  console.log(`A posição ${position} tem o valor ${valores[position]}`)
}