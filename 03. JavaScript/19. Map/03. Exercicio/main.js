//3. Criar uma lista de strings baseando-se na lista pessoas, que diga se a pessoa
// pode ou não ir para a matrix. Para ir, ela precisa ter uma idade maior do que 18.

const pessoas = [
  {
    nome: "Angelica",
    idade: 80,
  },
  {
    nome: "Eric",
    idade: 2,
  },
  {
    nome: "Paris",
    idade: 5,
  },
  {
    nome: "Kayne",
    idade: 16,
  },
  {
    nome: "Bob",
    idade: 100,
  },
];

const pessoasMatrix = pessoas.map((pessoas) => {
  if (pessoas.idade > 18) {
    return `${pessoas.nome} pode ir para a Matrix!`;
  }
  `${pessoas.nome} não pode ir para a Matrix!`;
});

console.log(pessoasMatrix);
