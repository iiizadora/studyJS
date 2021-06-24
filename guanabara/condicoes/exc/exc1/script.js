

function atualizarHoras() {
  let msg = document.querySelector('#msg');
  let img =document.querySelector('#imagem');
  let data = new Date();
  let hora = data.getHours();
  msg.innerHTML = ` Agora são ${hora} horas. `;

  if(hora >= 0 && hora<=12){
    img.scr='./assets/manha.png'
    document.body.style.background ='#F4C29F'
  } else if(hora>=12 && hora<=18) {
    img.scr = './assets/tarde.png'
    document.body.style.background='#BE7B6B'
  }else {
    img.scr = './assets/noite.png'
    document.body.style.background= '#162E35'
  }
}

atualizarHoras();