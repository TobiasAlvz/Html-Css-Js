let imoveis = [];
let menu = "";

do {
  menu = prompt(
    "Bem vindo a minha imobiliaria" +
      "\nNumero de imoveis cadastrados: " +
      imoveis.length +
      "\nO que deseja?" +
      "\n\n1 - Salvar imovel" +
      "\n2 - Listar imoveis" +
      "\n3 - Sair"
  );

  switch (menu) {
    case "1":
      const imovel = {};
      imovel.nomePropietario = prompt("Qual o nome do propietario do imovel? ");
      imovel.quartos = prompt("Quantos quartos possui o imovel? ");
      imovel.banheiros = prompt("Quantos banheiros possui o imovel? ");
      imovel.garagem = prompt("Possui garagem? (Sim/Não) ");
      const confimacao = confirm("Deseja continuar?");
      if (confimacao) {
        imoveis.push(imovel);
        alert("Imovel adicionado com sucesso");
      } else {
        alert("Voltando ao menu...");
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "imovel: " +
            (i + 1) +
            "\nPropietario: " +
            imoveis[i].nomePropietario +
            "\nNumero de quartos: " +
            imoveis[i].quartos +
            "\nNumero de banheiros: " +
            imoveis[i].banheiros +
            "\nPossui garagem? " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção invalida");
      break;
  }
} while (menu !== "3");
