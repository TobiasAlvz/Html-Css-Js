function show() {
  // Para obter um elemento unico apartir do Id
  const byId = document.getElementById("contact-list");
  console.log(byId);
  // Para varios elemetos por suas tags
  const byTagName = document.getElementsByTagName("li");
  console.log(byTagName);
  // a partir de uma classe
  const byClassName = document.getElementsByClassName("contact-input");
  console.log(byClassName);
  // a partir de uma query (semelhante aos seletores do CSS)
  const contacts = document.querySelectorAll("#contact-list > li > label");
  console.log(contacts);
  // a partir de uma query (Somente 1 elemento)
  const contact = document.querySelector("#contact-list > li > label");
  console.log(contact);
  // Pelo Nome
  const byName = document.getElementsByName("contact1");
  console.log(byName);
}
