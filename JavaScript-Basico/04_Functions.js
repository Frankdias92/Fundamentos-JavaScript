// Functions
// Verbo + Substantivo

/**
 * let corSite = "azul";
function resetaCor (){
  corSite = "";
}

console.log(corSite);
resetaCor();
console.log(corSite, "<- campo foi alterado, não é mais azul");

 */
let corSite = "azul";
function resetaCor(cor){
  corSite = cor;
}

console.log(corSite)
resetaCor("vermelho")
console.log(corSite, "('chamando função para alterar cor')")
