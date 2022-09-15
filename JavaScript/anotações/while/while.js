let velocidade = 100;

while (velocidade > 0) {
  alert("O carro está a " + velocidade + " Km/h");
  velocidade -= 20;
  alert("Dimininuindo 20 Km/h");

  if (velocidade === 20) {
    break;
  }
}

alert("O carro parou");
