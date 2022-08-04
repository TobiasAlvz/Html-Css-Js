// Recursividade - quando eu chamo a função dentrodela mesma
function fatorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

console.log(fatorail(6));
