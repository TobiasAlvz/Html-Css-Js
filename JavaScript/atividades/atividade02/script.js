const primeiroNumero = prompt("Digite o primeiro numero");
const segundoNumero = prompt("Digite o segundo numero");
const x = parseFloat(primeiroNumero);
const y = parseFloat(segundoNumero);

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
  "Resultados:\n" +
    "\nSoma: " +
    soma +
    "\nSubtração: " +
    subtracao +
    "\nMultiplicação: " +
    multiplicacao +
    "\nDivisão: " +
    divisao
);
