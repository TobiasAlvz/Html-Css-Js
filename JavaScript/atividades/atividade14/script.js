let opcoes = "";
let altura = 0;
let base = 0;
let lado = 0;
let baseMaior = 0;
let baseMenor = 0;
let pi = 3.14;
let raio = 0;

function areaRetangulo(base, altura) {
  const areaRetangular = base * altura;
  return areaRetangular;
}

function areaQuadrada(lado) {
  return areaRetangulo(lado, lado);
}

function areaTrapezio(baseMaior, baseMenor, altura) {
  const Trapezio = ((baseMaior + baseMenor) * altura) / 2;
  return Trapezio;
}

function areaCirculo(raio) {
  const areaCricular = pi * (raio * raio);
  return areaCricular;
}

do {
  opcoes = prompt(
    "Bem vindo a calculadora Geométrica" +
      "\nDe qual forma Geométrica vocÊ deseja realizar o calculo da area?" +
      "\n\n1 - Triangulo" +
      "\n2 - Retangulo" +
      "\n3 - Quadrado" +
      "\n4 - Trapézio" +
      "\n5 - Círculo" +
      "\n6 - Sair"
  );

  switch (opcoes) {
    case "1":
      altura = parseFloat(prompt("Qual a altura do triangulo?"));
      base = parseFloat(prompt("Qual a base do triangulo?"));
      alert("A area do Triangulo é: " + areaRetangulo(altura, base) / 2);
      break;
    case "2":
      altura = parseFloat(prompt("Qual a altura do retangulo?"));
      base = parseFloat(prompt("Qual a base do retangulo?"));
      alert("A area do retangulo é: " + areaRetangulo(altura, base));
      break;
    case "3":
      lado = parseFloat(prompt("Qual o lado do quadrado?"));
      alert("A area do quadrado: " + areaQuadrada(lado));
      break;
    case "4":
      baseMaior = parseFloat(prompt("Qual a base maior do trapézio?"));
      baseMenor = parseFloat(prompt("Qual a base menor do trapézio?"));
      altura = parseFloat(prompt("Qual a altura do trapézio?"));
      alert(
        "A area do trapézio é: " + areaTrapezio(baseMaior, baseMaior, altura)
      );
      break;
    case "5":
      raio = parseFloat(prompt("Qual o raio do circulo?"));
      alert("A area do circulo é: " + areaCirculo(raio));
      break;
    case "6":
      alert("Encerrando...");
      break;
    default:
      alert("Opção invalida");
      break;
  }
} while (opcoes !== "6");
