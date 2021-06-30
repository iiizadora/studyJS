function verificar(){
  const data = new Date()
  const ano = data.getFullYear()

  let formAno = document.querySelector('#txtano')
  let res =document.querySelector('#res')

  if(formAno.value.length == 0 || Number(formAno.value)> ano){

    alert('Erro! Verifique os dados e tente novamente!')
  }else{
    let formSex = document.getElementsByName('radsex')

    let idade = ano - Number(formAno.value)
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if (formSex[0].checked){
      genero = 'Masculina'

      if( idade >= 0 && idade <10){
        img.setAttribute('src', './assets/bebe-h.png')

      }else if (idade < 21){
        img.setAttribute('src', './assets/jovem-h.png')

      }else if (idade < 60){
        
        img.setAttribute('scr', './assets/adultohomem.png')

      }else{
        img.setAttribute('scr', './assets/idoso-h.png')
      }
      
    }else if (formSex[1].checked){
      genero = 'Feminina'
       
        if( idade >= 0 && idade <10){
          img.setAttribute('src', './assets/bebe-m.png')

        }else if (idade <21){
          img.setAttribute('src', './assets/jovem-m.png')

        }else if (idade <60){
          img.setAttribute('scr', './assets/adulto-m.png')

        }else{
          img.setAttribute('scr', './assets/idoso-m.png')
        }
        
    }

    res.style.textAlign = 'center' 
    res.innerHTML= `Detectamos uma pessoa ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}


//1ª coisa é verificar se o ano está vazio ou ano é maior qque o ano atual

//radsex[0]masculino e radsex[1]feminino

// fazer o teste para saber o gênero

//criar imagem dinâmicamente no js
