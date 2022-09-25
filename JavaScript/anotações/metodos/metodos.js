let pessoa = {
  nome: "Tobias",
  idade: 21,
  dizerOla() {
    // O this serve para referenciar dentro do objeto, o propio objeto.
    // Isso serve para esse CONTEXTO especifico
    console.log("Oi, meu nome é " + this.nome);
  },
};

pessoa.dizerOla();
