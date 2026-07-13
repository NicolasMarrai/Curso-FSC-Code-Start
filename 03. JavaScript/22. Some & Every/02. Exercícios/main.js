//2. Exercício 2: Verificar se alguma pessoa é maior de idade
//Enunciado: Guarde em uma variável se alguma pessoa da lista pessoas é maior de idade.

const pessoas = [
  { nome: "John", idade: 17 },
  { nome: "Jane", idade: 20 },
  { nome: "Doe", idade: 18 },
];

const maiorDeIdade = pessoas.some((idade) => {
  return idade.idade >= 18;
});

console.log(maiorDeIdade);
