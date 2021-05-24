# Resumo do curso

## Aula 05 - Variáveis
 
 Variáveis server para guardar dados

 Tipos de variáveis

 * Tipos primitivos

 1 - Number

 2 - String

 3 - Boolean

 4 - Null

 5 - Undefined

 6 - Object

 7 - Array

 8 - Função

 ## Aula 06


Para converter <strong>Número para string</strong>

Number(n) /
Number.parseflot(n) / 
Number.parseInt(n)


Para converter <strong>String para numero</strong>

String(n) /
n.toString()

<strong>Template strings</strong>
Usa `${variável}` / ${placehoder}

## <strong> Formatando strings</strong>
var s = 'Javascript'

s.length // quantos caracteres a string tem
s.toUpperCase()  // tudo para Maiúsculas
s.toLowerCase()  // tudo para Minúsculas

## <strong> Formatando Números</strong>

n.toFixed(2) // para fixar o número de casa decimais
n.toFixed(2).replace('.', ',')

## <strong> Formatando Números em valor real</strong>
console.log(n.toLocaleString('pt-BR',{style:'currency', currency:'BRL'}))

Não precisa ficar no console!

# Operadores Aritméticos

* Ordem de precedência
() parenteses , ** potência , * multiplicação, / divisão, % resto, + soma, - subtração


var n = 3
n +=4 // equivale a n = n+4
n -=5
n /=2
n **=2 // equivale a n = n**2
n %=5


* Ordem de Incremento

var n = 5
n = n + 1 => n++
n = n - 1 => n--


* Ordem dos operadores relacionais
1° aritméticos => 2º Relacionais => 3° Lógicos

1º Não !, 2º e &&, 3º ou ||


<strong>Exemplos de uso de Operadores Lógicos</strong>

idade >= 15 && idade <= 17 // a idade está entre 15 e 17?//

estado == "RJ" || estado == "SP" // o estado é RJ ou SP?

salário > 1500 && sexo != "M"  // O salário é acima de 1500 e não é homem? ou É uma mulher que recebe acima de 1500?


## Operadores Ternário

teste(teste lógico) <strong>?</strong> true <strong>: </strong>false

exemplo

var n =8

var res = =n %2 == 0 ? 5 : 9

res vai ser igual a 5

# DOM

Document Object Model
ele não é possível funcionar no node


Árvore DOM (pesquisar mais)


## É possivel acessar os elemwntos do Dom por

- Marca

- por ID

- por Nome 

- por Classe

- por Seletor


## <strong>Por Marca </strong>

getElementByTagName()

mais usado e recomendado usar querySelector para atualizações novas

div#msg => para uma id

div.msg => para uma classe
