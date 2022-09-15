const valorMetros = prompt("Digite um valor em metros: ");

const medidas = prompt(
  "Escolha um numero para transformar o valor em metros digitado: \n1- mm \n2- cm \n3- dm \n4- dam \n5- hm \n6- km"
);

const num = parseFloat(valorMetros);
const valorMedidas = parseFloat(medidas);

switch (valorMedidas) {
  case 1:
    alert(num + " Metro(s)" + " em mm é: " + num * 1000 + "mm");
    break;
  case 2:
    alert(num + " Metro(s)" + " em cm é: " + num * 100 + "cm");
    break;
  case 3:
    alert(num + " Metro(s)" + "Metro(s)" + " em dm é: " + num * 10 + "dm");
    break;
  case 4:
    alert(num + " Metro(s)" + " em dam é: " + num / 10 + "dam");
    break;
  case 5:
    alert(num + " Metro(s)" + " em hm é: " + num / 100 + "hm");
    break;
  case 6:
    alert(num + " Metro(s)" + " em km é: " + num / 1000 + "km");
    break;
  default:
    alert("Opção invalida!");
}
