function carregar() {
  var msg = document.getElementById("msg");
  var foto = document.getElementById("foto");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 00 && h <= 12) {
    img.src = "manha.png";
  } else if (hora <= 18) {
    img.src = "tarde.png";
  } else {
    img.src = "noite.png";
  }
}
