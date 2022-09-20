let opcoes = "";
let dinheiro = parseFloat(prompt("Qual sua renda atual?"));
let valor = 0;

do {
  opcoes = prompt(
    "Seu saldo é: " +
      dinheiro +
      "\n\nEscolha uma opção:\n" +
      "1 - Adicionar:\n" +
      "2 - Subtrair:\n" +
      "3 - Encerrar:"
  );

  if (opcoes === "1") {
    let valor = parseFloat(prompt("Quanto você deseja adicionar?"));
    dinheiro += valor;
  } else if (opcoes === "2") {
    let valor = parseFloat(prompt("Quanto você deseja subtrair?"));
    dinheiro -= valor;
  } else alert("Opção invalida")
} while (opcoes !== "3");

alert("Encerrando...");
