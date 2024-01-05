/**
 * Constructor Function
 * 
 * Criar um objeto postagem
 * titulo, mensagem, autor, visualizacoes, comentarios, estaaovivo.
 */

function postagem(titulo,mensagem,autor){
  this.titulo = titulo,
  this.mensagem = mensagem,
  this.autor = autor,
  this.visualizacoes = 0,
  this.comentarios = [],
  this.estaAoVivo = false
}

let post = new postagem('a','b','c');
console.log(post)