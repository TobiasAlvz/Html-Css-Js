const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = "Ola, mundo!";

  // Vai pegar o valor em tempo real, ou seja, o "Ola, mundo"
  console.log(input.value);
  // Vai pegar o valor pré definido.
  console.log(input.getAttribute("value"));
});

document.getElementById("type").addEventListener("click", function () {
  // Mudando o tipo de texto
  input.type = input.type == "text" ? "radio" : "text";
  // Aqui só dá para mudar uma vez.
  //input.setAttribute("type", "radio");
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "texto2";
});

document.getElementById("disable").addEventListener("click", function () {
  input.disabled = input.disabled == true ? false : true;
  //input.setAttribute("disabled", !input.disabled);
});

document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.somethingElse;
  console.log("O valor do atributo data-something-else é: " + data);
  input.dataset.somethingElse = "Algum outro valor";
  console.log(
    "O valor do atributo data-something-else agora é: " +
      input.dataset.somethingElse
  );
});
