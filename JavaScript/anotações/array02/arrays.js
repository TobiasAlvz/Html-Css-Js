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

// Adicionar elementos no final
// Push
arr.push("Boromir");

// Adicionar elementos no inicio
// unshift
arr.unshift("Boromir");

// Remover elementos no final
// pop
const ultimo = arr.pop();

// Remover elementos no começo (primeiro)
// shift
const primeiro = arr.shift();

// Pesquisar por um elemento
// Includes
const inclui = arr.includes("Boromir");

// Pesquisar por um elemento
// indexOf
const indice = arr.indexOf("Boromir");

// cortar e concatenar
// Slice

const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);

// concatenar
// concat
const novo = outros.concat(hobbits, "m");

// Substituir elementos
// Splice

const a = novo.splice(indice, 1, "Gandaf, eu");

// Iterar sobre os Elementos
for (let i = 0; i < novo.length; i++) {
  const elemento = novo[i];
  console.log(elemento + " se encontra na posição " + i);
}
