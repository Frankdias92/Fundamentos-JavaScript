function verifyPalindromo(string) {
  if(!string) return;

  return string.split("").reverse().join("") === string;
  /*  'split'separa a string
      'reverse' inverte
      'join' vai juntar a string e verificar se é igual a string.
  */
}


// segunda alternativa
function verifyPalindromo2(string) {
  if (!string) return "string inexistente";

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length -1 - i]) {
      return false;
    }
  }

  return true
}

console.log(verifyPalindromo("ana"));