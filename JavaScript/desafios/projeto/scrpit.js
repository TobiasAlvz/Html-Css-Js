function finalizar() {
  const text = document.getElementById("text").value;
  const res = document.getElementById("res");

  if (text == "Joseane" || text == "Tobias") {
    res.innerHTML = "<h2>Acertou nota deiz</h2>";
    res.style.color = "green";
  } else {
    res.innerHTML = "<h2>Errou nota zelo</h2>";
    res.style.color = "red";
  }
}
