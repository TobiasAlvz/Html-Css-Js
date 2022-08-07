var num = document.getElementById("fnum");
var lista = document.getElementById("flista");
var res = document.getElementById("res");
var valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}
function inList(n, i) {
  if (i.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inList(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Numero já encontrado ou invalido");
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert("Adicione valores antes");
  } else {
    let lot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];

      if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }
    media = soma / lot;
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo temos, ${lot} numeros cadastrados</p>`;
    res.innerHTML += `<p>O maior numero informado foi ${maior}</p>`;
    res.innerHTML += `<p>O menor numero informado foi ${menor}</p>`;
    res.innerHTML += `<p>A soma dos numeros informados foi ${soma}</p>`;
    res.innerHTML += `<p>A media dos numeros informados foi ${media}</p>`;
  }
}
