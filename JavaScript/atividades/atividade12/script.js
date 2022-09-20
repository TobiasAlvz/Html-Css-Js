const baralho = [];
let opcao = "";

do {
  opcao = prompt(
    "Cartas no baralho: \n" +
      baralho.length +
      "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  );

  if (opcao === "1") {
    let novaCarta = prompt("Qual o nome da carta");
    baralho.push(novaCarta);
  } else if (opcao === "2" && baralho.length > 0) {
    let cartaPuxada = baralho.pop();
    alert(cartaPuxada + " foi a carta puxada");
  } else if (opcao === "3") {
    alert("Encerrando...");
  } else {
    alert("Opção invalida");
  }
} while (opcao !== "3");
