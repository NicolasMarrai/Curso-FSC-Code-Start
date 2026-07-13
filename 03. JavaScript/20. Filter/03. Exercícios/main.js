//3. Exercício 3: Filtrar pessoas com idade suficiente
//Enunciado: Criar uma lista que contém apenas as pessoas que têm idade maior ou igual a 8 anos para fazer parte da matrix.

const pessoas = [
  {
    nome: "Kenny",
    idade: 7,
  },
  {
    nome: "Eric",
    idade: 10,
  },
  {
    nome: "Paris",
    idade: 5,
  },
  {
    nome: "Angelina Jolie",
    idade: 80,
  },
  {
    nome: "Bob",
    idade: 100,
  },
];

const idadeMaiorOuIgual8 = pessoas.filter((people) => {
  return people.idade >= 8;
});

console.log(idadeMaiorOuIgual8);
