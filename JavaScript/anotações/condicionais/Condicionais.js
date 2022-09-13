let idade = prompt("Informe sua idade");

if (idade > 18) {
  alert("maior de idade");
} else if (idade > 12) {
  alert("Menor de idade");
} else {
  alert("Criança");
}

// Operador ternario (forma abreviada)
const res = 6 === 6 ? "Verdade" : "Falso";
