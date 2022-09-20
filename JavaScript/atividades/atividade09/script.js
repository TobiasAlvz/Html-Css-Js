const numero = prompt("Digite para ser gerado a tabuada");
let resultado = "";

if (numero.length == 0) {
  alert("Você precisa digitar algum numero...");
} else {
  for (let i = 0; i <= 10; i++) {
    resultado += numero + " * " + i + " = " + numero * i + "\n";
  }
}

alert(resultado);
