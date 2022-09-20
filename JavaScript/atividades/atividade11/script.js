let menu = [];
let opcao = "";

do {
  let pacientes = "";
  for (let i = 0; i < menu.length; i++) {
    pacientes += i + 1 + " - " + menu[i] + "\n";
  }

  opcao = prompt(
    "Pacientes:\n" +
      pacientes +
      "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
  );

  if (opcao === "1") {
    let novoPaciente = prompt("Qual o nome do pacinte");
    menu.push(novoPaciente);
  } else if (opcao === "2" && pacientes.length > 0) {
    let pacienteConsultado = menu.shift();
    alert(pacienteConsultado + " foi atendido");
  } else if (opcao === "3") {
    alert("Encerrando...");
  } else {
    alert("Opção invalida");
  }
} while (opcao !== "3");
