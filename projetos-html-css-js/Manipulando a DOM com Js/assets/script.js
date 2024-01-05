function changeMode() {
  changeClasses();
  changeText();
}

function changeClasses() {
  button[0].classList.toggle('darkModeClasse');
  h1.classList.toggle('darkModeClasse');
  body.classList.toggle('darkModeClasse');
  footer.classList.toggle('darkModeClasse');
}

function changeText() {
  const lightMode = "Light Mode";
  const darkMode = "Dark Mode";
  if(body.classList.contains('darkModeClasse')){
    button[0].innerHTML = lightMode;
    h1.innerHTML = darkMode + " ON";
    return;
  }

  button[0].innerHTML = darkMode;
  h1.innerHTML = lightMode + " ON";
}

const darkModeClasse = 'dark-mode';
const button = document.getElementsByClassName('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

console.log(button);

button.addEventListener('click', changeMode); // Adicione o ouvinte de evento ao primeiro elemento da coleção
