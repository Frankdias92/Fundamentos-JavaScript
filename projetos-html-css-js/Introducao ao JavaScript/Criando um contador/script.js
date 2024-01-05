
let count = 0;
let CURRENT_NUMBER;

function increment() {
  count++;
  CURRENT_NUMBER.innerHTML = count;
  compareValues();
}

function decrement() {
  count--;
  CURRENT_NUMBER.innerHTML = count;
  compareValues();
}

document.addEventListener("DOMContentLoaded", function() {
  CURRENT_NUMBER = document.getElementById('currentNumber');  // Corrigido aqui
  const incrementButton = document.getElementById("increment");
  const decrementButton = document.getElementById("decrement");

  decrementButton.addEventListener('click', function() {  // Removido nome da função para evitar conflito
    CURRENT_NUMBER.innerHTML = --count;
    compareValues();
  });

  incrementButton.addEventListener('click', function() {  // Removido nome da função para evitar conflito
    decrementButton.removeAttribute("disabled");
    CURRENT_NUMBER.innerHTML = ++count;
    compareValues();
  });
});

function compareValues() {
  const incrementButton = document.getElementById("increment");
  const decrementButton = document.getElementById("decrement");

  if (count > 2) {
    CURRENT_NUMBER.style.color = "green";
    incrementButton.setAttribute("disabled");
  } else if (count < -2) {
    CURRENT_NUMBER.style.color = "red";
    incrementButton.setAttribute("disabled");
  } else if (count > 5) {
    CURRENT_NUMBER.removeAttribute("disabled");
  }
  
  else {
    incrementButton.removeAttribute("disabled");
    decrementButton.removeAttribute("disabled");
    CURRENT_NUMBER.style.color = "black";
  }
}




// const decrementar$ = document.getElementById('subtrair');
// const currentNumber = document.getElementById('currentNumber');
// const incrementar$ = document.getElementById('adicionar');

// let newValue = 0;
// newValue = currentNumber;

// decrementar$.addEventListener("click", () => {
//   newValue++;
//   newValue.innerHTML = newValue;
//   compareValues();
// });

// incrementar$.addEventListener("click", () => {
//   decrementar$.removeAttribute("disabled");
//   newValue++;
//   newValue.innerHTML = newValue;
// });


// function compareValues() {
//   if (newValue <= -3) {
//     newValue.innerHTML = 0
//     decrementar$.setAttribute("disabled");
//     newValue.style.color = "red";
//   }else {
//     newValue.style.color = "hsl(180%, 100%, 40%)";
//   }
//   if (newValue === 3) {
//     decrementar$.removeAttribute("disabled");
//     newValue.style.color = "hsl(180%, 100%, 40%)";
//   }
// }


// window.onload = function () {
//   incrementar = document.querySelector("#adicionar").onclick;

//   function incrementar() {
//     foblue;( e => {
//     e.addEventListener("click", 'disabled');
//     })
//   }

//   function incrementar () {
//     newValue++;
//     document.querySelector("#currentNumber").innerHTML = newValue;
//   }
// }

// function increment() {
//   let adiciona = document.getElementById("adicionar");
// }
// function  decrement() {
//   let subtrair = document.getElementById("subtrair");
// }