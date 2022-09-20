let opcoes = "";

do {
  opcoes = prompt(
    "Escolha uma opção" +
      "\nop-1" +
      "\nop-2" +
      "\nop-3" +
      "\nop-4" +
      "\nop-5(Encerrar)"
  );

  switch (opcoes) {
    case "1":
      alert("Você escolheu a opção-1");
      break;
    case "2":
      alert("Você escolheu a opção-2");
      break;
    case "3":
      alert("Você escolheu a opção-3");
      break;
    case "4":
      alert("Você escolheu a opção-4");
      break;
    case "5":
      alert("Você escolheu a opção-5");
      break;

    default:
      alert("Opção invalida");
      break;
  }
} while (opcoes !== "5");
alert("Encerrando");
