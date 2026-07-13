//1. Soma dos Números: Guarde em uma variável a soma de todos os valores contidos na lista "Números".
const numeros = [3, 4, 6, 8]; // Exemplo de lista de números

const total = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

console.log(total);
