// Parte 1: Usando o Map para multiplicar números por 2
const Numbers = [1, 2, 3, 4, 5];

// Multiplicando cada número por 2
const NumbersMultipliedBy2 = Numbers.map(function (Number) {
  return Number * 2;
});

// Logando o resultado
console.log(NumbersMultipliedBy2); // Saída: [2, 4, 6, 8, 10]

// Parte 2: Usando o Filter para pegar idades pares
const ages = [8, 13, 27, 30, 22, 40];

// Filtrando as idades pares
const evenAges = ages.filter(function (age) {
  return age % 2 === 0; // Verifica se a idade é par
});

// Logando o resultado
console.log(evenAges); // Saída: [8, 30, 22, 40]

// Parte 3: Usando o Reduce para somar todas as idades
const sumOfAges = ages.reduce(function (accumulator, age) {
  return accumulator + age; // Soma o acumulador com a idade atual
}, 0); // Valor inicial do acumulador é 0

// Logando o resultado
console.log(sumOfAges); // Saída: 140
