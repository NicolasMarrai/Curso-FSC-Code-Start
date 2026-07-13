// Criando a lista de pessoas
const pessoas = [
  { nome: "John", idade: 18 },
  { nome: "Jane", idade: 20 },
  { nome: "Jane", idade: 24 },
];

// Usando o método find para encontrar a pessoa chamada John
const john = pessoas.find((item) => item.nome === "John");
console.log("Encontrado com find:", john); // Deve retornar: { nome: "John", idade: 18 }

// Usando o método find para encontrar a primeira pessoa chamada Jane
const jane = pessoas.find((item) => item.nome === "Jane");
console.log("Encontrado com find:", jane); // Deve retornar: { nome: "Jane", idade: 20 }

// Testando o find com um nome que não existe
const maria = pessoas.find((item) => item.nome === "Maria");
console.log("Encontrado com find:", maria); // Deve retornar: undefined

// Usando o método findIndex para encontrar a posição da pessoa chamada Jane
const janeIndex = pessoas.findIndex((item) => item.nome === "Jane");
console.log("Índice encontrado com findIndex:", janeIndex); // Deve retornar: 1

// Testando o findIndex com um nome que não existe
const mariaIndex = pessoas.findIndex((item) => item.nome === "Maria");
console.log("Índice encontrado com findIndex:", mariaIndex); // Deve retornar: -1
