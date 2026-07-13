//1. Exercício 1: Verificar se algum número é par
//Enunciado: Guarde em uma variável se algum valor da lista números é par.

const numeros = [1, 2, 3, 4, 5, 6];

const algumNumeroPar = numeros.some((numero) => {
  return numero % 2 === 0;
});

console.log(algumNumeroPar);
