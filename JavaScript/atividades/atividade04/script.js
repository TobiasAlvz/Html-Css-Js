const primeiroNome = prompt("Digite o nome do personagem de ataque");
const poderAtaque = prompt("Digite o poder de ataque do personagem");
const segundoNome = prompt("Digite o nome do personagem de defesa");
let pontosVida = prompt("Digite o pode de vida do personagem");
const poderDefesa = prompt("Digite o poder de defesa do personagem");
const escudo = prompt("O personagem possui escudo? (Sim ou Não)");
let dano = 0;

const esc = escudo === "Sim" ? true : false;

if (poderAtaque > poderDefesa && esc == false) {
  dano = poderAtaque - poderDefesa;
} else if (poderAtaque > poderDefesa && esc == true) {
  dano = (poderAtaque - poderDefesa) / 2;
}

pontosVida -= dano;

alert("O dano causado foi " + dano);
alert(
  primeiroNome +
    "\nPoder de ataque: " +
    poderAtaque +
    "\n\n" +
    segundoNome +
    "\npoder de Defesa: " +
    poderDefesa +
    "\nPontos de vida: " +
    pontosVida +
    "\nPossui escudo: " +
    escudo
);
