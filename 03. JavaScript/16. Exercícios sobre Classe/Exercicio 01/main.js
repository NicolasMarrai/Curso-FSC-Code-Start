// 1. Crie uma classe chamada "Guerreiro", que receba, em seu construtor, um "nome" e uma "idade",
// e que contenha um método chamado "lutar" que logue uma mensagem dizendo:
// "O guerreiro {nome}, de {idade} anos está lutando".

// 2. Crie uma classe chamada "Viking" derivada da classe "Guerreiro" criada acima. Sobrescreva o método "lutar",
// que agora logará uma mensagem dizendo "O viking {nome}, de {idade} amos está lutando em nome de Odin!"

// 3. Crie também, na classe "Viking" um método chamado "lutarComMachado", que logue uma mensagem dizendo:
// "O viking {nome}, de {idade} anos está lutando com seu machado nome de Thor!"

class Guerreiro {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  lutar() {
    console.log(
      `O guerreiro ${this.nome}, de ${this.idade} anos está lutando!`,
    );
  }
}

class Viking extends Guerreiro {
  constructor(nome, idade) {
    super(nome, idade);
  }

  lutar() {
    console.log(
      `O viking ${this.nome}, de ${this.idade} anos está lutando em nome de Odin!`,
    );
  }

  lutarComMachado() {
    console.log(
      `O viking ${this.nome}, de ${this.idade} anos está lutando com seu machado nome de Thor!`,
    );
  }
}

const guerreiro = new Guerreiro("Pedro Marrai", 24);
const viking = new Viking("Nicolas Marrai", 24);
guerreiro.lutar();
viking.lutar();
viking.lutarComMachado();
