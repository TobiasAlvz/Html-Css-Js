function register(element) {
  const username = element.children.username.value;
  const password = element.children.password.value;
  const passwordConfirmation = element.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert(`O usuario ${username} foi cadastrado com sucesso`);
    const res = document.getElementById("res");
    const user = document.createElement("p");
    user.innerText = `O usuário ${username} foi cadastrado com sucesso e sua senha é ${password}`;
    res.appendChild(user);
  } else {
    alert(`As senhas são incompativeis`);
  }
}
