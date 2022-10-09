const formDevs = document.getElementById("devForm");
const developers = [];

function register(ev) {
  ev.preventDefault();
  let fullName = document.getElementById("name");
  let res = document.getElementById("res");
  let feature = document.createElement("hr");
  let technologyName = document.createElement("p");
  technologyName.innerHTML =
    '<label for="technologyName">Nome da tecnologia: </label>';
  const technologyNameInput = document.createElement("input");
  technologyNameInput.type = "text";
  technologyNameInput.name = "technologyName";
  technologyNameInput.id = "technologyName";
  technologyName.appendChild(technologyNameInput);

  let experience = document.createElement("p");
  experience.innerText = "Tempo de experiência: ";

  const experienceJr = document.createElement("input");
  experienceJr.type = "radio";
  experienceJr.name = "experience";
  experienceJr.id = "experienceJr";

  const experienceJrLabel = document.createElement("label");
  experienceJrLabel.innerHTML = "<label for='experienceJr'>Junior - </label>";

  const experiencePl = document.createElement("input");
  experiencePl.type = "radio";
  experiencePl.name = "experience";
  experiencePl.id = "experiencePl";

  const experiencePlLabel = document.createElement("label");
  experiencePlLabel.innerHTML = "<label for='experiencePl'>Pleno - </label>";

  const experienceSor = document.createElement("input");
  experienceSor.type = "radio";
  experienceSor.name = "experience";
  experienceSor.id = "experienceSor";

  const experienceSorLabel = document.createElement("label");
  experienceSorLabel.innerHTML = "<label for='experienceSor'>Sênior</label>";

  experience.append(
    experienceJr,
    experienceJrLabel,
    experiencePl,
    experiencePlLabel,
    experienceSor,
    experienceSorLabel
  );

  const buttonRemove = document.createElement("button");
  buttonRemove.innerText = "Remover";

  const buttonRegister = document.createElement("button");
  buttonRegister.innerText = "Cadastrar";
  buttonRegister.type = "submit";
  res.append(feature, technologyName, experience, buttonRemove, buttonRegister);

  formDevs.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const name = document.getElementById("name").value;
    const nameTec = document.getElementById("technologyName").value;
    const exp = document.getElementsByName("experience");
    let ex = "";
    if (exp[0].checked) {
      ex = "Junior";
    } else if (exp[1].checked) {
      ex = "Pleno";
    } else {
      ex = "Senior";
    }

    const newDev = { Nome: name, Tecnologia: nameTec, experiencia: ex };
    developers.push(newDev);
    technologyNameInput.value = "";
    fullName.value = "";

    alert(
      `O nome do Dev é ${name}, a tecnologia que ele domina é ${nameTec}, e o seu nível de experiencia é ${ex}`
    );
  });
  console.log(developers);
}

const button = document.getElementById("registerTechnology");
button.addEventListener("click", register);
