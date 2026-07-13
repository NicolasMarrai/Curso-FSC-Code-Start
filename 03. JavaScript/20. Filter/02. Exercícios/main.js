//2. Exercício 2: Filtrar números pares
//Enunciado: Criar uma lista que contém apenas os valores pares da lista números2.

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8];

const numerosPares = numeros2.filter((par) => par % 2 === 0);

console.log(numerosPares);
