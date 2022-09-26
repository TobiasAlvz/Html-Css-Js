const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

// Maneira "Errada"
// const nomes = []
// for (let i = 0; i < personagens.length; i++) {
//   const personagem = personagens[i]
//   nomes.push(personagem.nome)
// }

// map: permite obter um novo array a partir de um array existenste
const classes = personagens.map(function (personagem) {
  return personagem.classe;
});

// console.log(classes);

// const orc = [];
// for (let i = 0; i < personagens.length; i++) {
//   const personagem = personagens[i];
//   if (personagem.raca === "Orc") {
//     orcs.push(personagem);
//   }
// }

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
const clas = personagens.filter(function (personagem) {
  return personagem.classe === "Guerreiro";
});

// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
const nivelTotal = personagens.reduce(function (acumulador, personagem) {
  return acumulador + personagem.nivel;
}, 0);

const cl = personagens.reduce(function (acumulador, personagem) {
  if (acumulador[personagem.classe]) {
    acumulador[personagem.classe].push(personagem);
  } else {
    acumulador[personagem.classe] = [personagem];
  }
  return acumulador;
}, {});

console.log(cl);

// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
personagens.sort(function (a, b) {
  return a.nivel - b.nivel;
});
