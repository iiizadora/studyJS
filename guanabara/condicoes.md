# Tipos de Condição

## Condição Simples

Usa apenas o 

if(condição){

true


}

## Condição Composta

Usa apenas o 

if(condição){

true

} else {

false


}

## Condição Aninhadas


if(condição1) {

bloco1

} else {

  if(condição2) {

    bloco2

  } else {

    bloco3
  }

}

<strong>Pegar a hora real do sistema</strong>

criar variável usando new Date()

chamar a variavel criada

var agora = new Data ()

var hora = agora.getHours()


## Condição Múltipla

Ideal para valores fixos(situação pontual).  Funciona com caracteres e numeros inteiros

<br>
<strong>switch</strong>(expresssão) {
  
  <strong>case</strong> valor 1:

  Comando

  break (é obrigatório)

  
  <strong>case</strong> valor 2:

  Comando 

  break (é obrigatório)

    
  <strong>case</strong> valor 3:

  Comando

  break (é obrigatório)

   <strong>default: </strong>

  break
}