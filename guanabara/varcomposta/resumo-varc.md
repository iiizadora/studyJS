# Variáveis Compostas ou Vetor

## Array

É uma variável que tem vários elementos e cada elemento é composto por seu valor e uma chave de identificação.

~~~~javascript
let exemplo = [indice0, indice1,indice2,...,indiceN]
~~~~

- Para acrescentar mais 1 elemento no Array de maneira automatizada

~~~~javascript
let num = [5,8,4]
num[3] = 6
console.log(num)
[5,8,4,6]
~~~~

- Para acrescentar 1 elemento no Array de maneira explicita(não importando a ordem),usar push()

~~~~javascript
let num = [5,8,4]
num.push(7) 
console.log(num)
[5,8,4,7]
~~~~

- Descobrir o comprimento do Array usando o atributo .length

~~~~javascript
let num = [5,8,4]
num.length 
console.log(num.length)
3
~~~~

- Método para colocar o conteúdo do Array em ordem crescente .sort()

~~~~javascript
let num = [10,5,8,4]
num.sort() 
console.log(num.sort())
[4,5,8,10]
~~~~

- Usando for in para percorrer um objeto

~~~~javascript
// leia Para cada posição em numero,eu vou mostrar ...
for(let pos in num){
  console.log(num[pos])
}
~~~~

- Buscar valores dentro um vetor usando o método indexOF()

~~~~javascript
let num = [10,5,8,4]
num.indexOf(8) 
console.log(num.indexOf(8))
2 // está na posição 2 o valor 8
~~~~
