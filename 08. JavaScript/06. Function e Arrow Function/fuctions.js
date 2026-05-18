// Função Tradicional
function sum(a, b) {
  console.log(a + b); // Loga a soma
}

// Chamadas da função tradicional
sum(2, 2); // Saída: 4
sum(10, 2); // Saída: 12

// Retornando um valor na função tradicional
function sumWithReturn(a, b) {
  return a + b;
}

const sumValue = sumWithReturn(2, 2);
console.log(sumValue); // Saída: 4

// Usando valor padrão para o parâmetro
function sumWithDefault(a, b = 10) {
  return a + b;
}

console.log(sumWithDefault(2)); // Saída: 12 (2 + 10)

// ----------------------------------------

// Arrow Function
const sumArrow = (a, b = 10) => {
  return a + b;
};

console.log(sumArrow(2)); // Saída: 12

// Simplificando a Arrow Function
const sumArrowSimplified = (a, b = 10) => a + b;

console.log(sumArrowSimplified(2)); // Saída: 12

// Logando múltiplos valores na Arrow Function
const sumArrowWithLog = (a, b = 10) => {
  console.log(a, b); // Loga os valores de a e b
  return a + b;
};

console.log(sumArrowWithLog(2)); // Saída: 2 10 (log) e 12 (resultado da soma)
