let valores = [9, 2, 3, 5, 1, 7];

for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

console.log("------------------------=-=-=-=-=-=-=-=-=");
// Uma forma mais simples de mostrar os numeros dess jeito é

for (const pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
