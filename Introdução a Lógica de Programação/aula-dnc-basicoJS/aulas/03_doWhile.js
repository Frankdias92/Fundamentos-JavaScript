const senhaCorreta = "12345"
let senha = "";

do {
  senha = prompt("Digite a senha: ");
} while (senha !== senhaCorreta);

console.log("Senha correta! Acesso concedido.");
