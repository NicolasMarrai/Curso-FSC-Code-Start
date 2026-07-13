//Exemplo 1: Multiplicando números por 2
// Criando uma lista de números
const numeros = [1, 2, 3];

// Usando o map para multiplicar cada número por 2
const numerosMultiplicadosPor2 = numeros.map((item) => item * 2);

// Logando o resultado
console.log(numerosMultiplicadosPor2); // Saída: [2, 4, 6]

//Exemplo 2: Usando map com objetos
// Criando uma lista de usuários
const usuarios = [
  { nome: "John", idade: 20 },
  { nome: "Doe", idade: 40 },
];

// Usando o map para criar uma nova lista com as idades multiplicadas por 2
const usuariosComIdadeMultiplicadaPor2 = usuarios.map((item) => ({
  ...item, // Spread operator para manter todas as propriedades do objeto
  idade: item.idade * 2, // Multiplicando a idade por 2
}));

// Logando o resultado
console.log(usuariosComIdadeMultiplicadaPor2);
// Saída: [{ nome: 'John', idade: 40 }, { nome: 'Doe', idade: 80 }]
