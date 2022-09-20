let velocidade = 20;

// O do While vai realizar a tarefa pelo menos 1 vez, mesmo se a condição for falsa.
do {
  alert("A velocidade é " + velocidade);
  velocidade -= 20;
} while (velocidade > 20);

alert(velocidade);
