function escalar() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  const confirmacao = confirm(
    "Deseja escolar um jogador com essas informações?\n" +
      "Posição: " +
      position +
      "\nNome: " +
      name +
      "\nNumero da camisa: " +
      number
  );

  if (confirmacao) {
    const team = document.getElementById("res");

    const newPlayer = document.createElement("li");
    newPlayer.id = number;

    newPlayer.innerText = `Jogador escalado: Posição: ${position} Nome: ${name} Numero da camisa: ${number}`;
    team.appendChild(newPlayer);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function remover() {
  const numberToRemove = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById(numberToRemove);

  const confirmation = confirm("Remover " + playerToRemove.innerText + "?");

  if (confirmation) {
    document.getElementById("res").removeChild(playerToRemove);
    document.getElementById("numberToRemove").value = "";
  }
}
