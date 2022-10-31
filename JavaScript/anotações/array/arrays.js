const listaCompras = ["açucar", false];
console.log(listaCompras);

listaCompras[0] = "Arroz";
listaCompras[1] = "Feijão";
listaCompras[2] = 7;
console.log(listaCompras);

const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log("--------------===========-----------");
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}
console.log("--------------===========-----------");
for (let i in arr) {
  const element = arr[i];
  console.log(element);
}
