// Condição alinhada
var hora = new Date();
var h = hora.getHours();

console.log(`Agoras são exatamente ${h} horas`);
if (h >= 00 && h <= 4) {
  console.log("Boa madrugada");
} else if (h < 12) {
  console.log("Bom dia");
} else if (h <= 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}
