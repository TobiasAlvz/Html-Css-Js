var num = [1, 2, 3, 4, 6];

console.log(`Os valores do vetor é ${num}`);
console.log("------------=-=--------------");
console.log(num);
console.log("------------=-=--------------");
// Para saaber o tamanho de uma lista
console.log(`O vetor tem ${num.length} posições`);
console.log("------------=-=--------------");
// Para adicionar um numero no final, se usa .push(aqui seria o que vai adiconar)
num.push(5);
console.log(num);
console.log("------------=-=--------------");
// Para colocar a lista em ordem se usa .sort()
num.sort();
console.log(num);
console.log("------------=-=--------------");
// Para buscar valores em uma variavel composta se usa .indexOf(aqui é o valor que vc tá buscando)
var pos = num.indexOf(2);
console.log(pos);
