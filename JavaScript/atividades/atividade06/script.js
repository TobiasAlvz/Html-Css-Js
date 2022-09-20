const turista = prompt("Qual o nome do turista?");

let cidades = "";
let contagem = 0;

let continuar = prompt("Você já visitou alguma cidade? (Sim ou Não");

while (continuar === "Sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?");
  // Cidades = cidades + ...
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = prompt("Você visitou alguma outra cidade?");
}

alert(
  "Turista: " +
    turista +
    "\nQuantidade de cidades visitadas: " +
    contagem +
    "\nCidades visitadas:\n" +
    cidades
);
