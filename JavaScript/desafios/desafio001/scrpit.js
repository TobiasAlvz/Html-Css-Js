function carregar() {
  var msg = document.getElementById("msg");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 00 && hora <= 12) {
    document.getElementById("tarde").style.display = "none";
    document.getElementById("manha").style.display = "block";
    document.getElementById("noite").style.display = "none";
    document.body.style.background = "yellow";
  } else if (hora <= 18) {
    document.getElementById("tarde").style.display = "block";
    document.getElementById("manha").style.display = "none";
    document.getElementById("noite").style.display = "none";
    document.body.style.background = "orange";
  } else {
    document.getElementById("tarde").style.display = "none";
    document.getElementById("manha").style.display = "none";
    document.getElementById("noite").style.display = "block";
    document.body.style.background = "gray";
  }
}
