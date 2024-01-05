const state = {
  view: {
    foto: document.querySelector('.foto'),
  },
}

function timing(hora, msg, minutes, horas) {

  if (hora >= 0 && hora < 12) {
    msg.textContent = `Bom dia!`
    horas.textContent = `são ${hora} : ${minutes}`    
    state.view.foto.style.backgroundImage = gerarFoto('foto1');
    $('body').css('backgroundColor', '#009688');
  } else if (hora >= 12 && hora < 18) {
    msg.textContent = `Boa Tarde!`
    horas.textContent = `são ${hora} : ${minutes}`
    state.view.foto.style.backgroundImage = gerarFoto('foto2');
    $('body').css('backgroundColor', '#FF9800');
  } else {
    msg.textContent = `Boa Noite!`
    horas.textContent = `são ${hora} : ${minutes}`
    state.view.foto.style.backgroundImage = gerarFoto('foto3');
    $('body').css('backgroundColor', '#9C27B0');
  }
}

function gerarFoto(nome) {
  return `url('./src/imgs/${nome}.jpg')`;
}

function loading() {
  let msg = document.querySelector('.msg');
  let horas = document.createElement('p');
  horas.className = 'loading';

  
  const data = new Date()
  // let hora = data.getHours()
  let hora = 18;
  let minutes = data.getMinutes()

  timing(hora, msg, minutes, horas)

  msg.appendChild(horas)
}

loading()

