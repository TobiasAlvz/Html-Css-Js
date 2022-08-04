function contar() {
  let inicio = document.getElementById("inicio");
  let fim = document.getElementById("fim");
  let passos = document.getElementById("passos");
  let res = document.getElementById("res");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passos.value.length == 0
  ) {
    res.innerHTML = "ERRO. faltam dados.";
  } else {
    res.innerHTML = "Contando... ";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passos.value);
    if (p <= 0) {
      alert("Passos invalidos! Considerando PASSO 1");
      p = 1;
    }
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{27A1}`;
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{27A1}`;
      }
    }
    res.innerHTML += "Fim";
  }
}
