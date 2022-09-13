let primeiroNome = prompt("Digite o nome do primeiro carro");
let vel1 = prompt("Digite a velocidade do primeiro carro");
let segundoNome = prompt("Digite o nome do segundo carro");
let vel2 = prompt("Digite a velocidade do segundo carro");

let x = parseFloat(vel1);
let y = parseFloat(vel2);

if (x > y) {
  alert("O carro " + primeiroNome + " é mais rapido");
} else if (x == y) {
  alert("As velocidades dos carros são iguais");
} else {
  alert("O carro " + segundoNome + " é mais rapido");
}
