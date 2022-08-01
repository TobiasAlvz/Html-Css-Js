// Condição alinhada
var idade = 66;
console.log(`Você tem ${idade} anos.`);
if (idade < 16) {
  console.log("Não pode votar");
} else if (idade < 18 || idade > 65) {
  console.log("Não é preciso votar");
} else {
  console.log("Seu voto é obrigatorio");
}
