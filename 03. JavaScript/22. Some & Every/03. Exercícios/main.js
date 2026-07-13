//3. Exercício 3: Verificar se todos os valores da lista números2 são pares
//Enunciado: Guarde em uma variável se todos os valores da lista números2 são pares.

const numeros2 = [1, 2, 3, 4, 5];

const todosValoresPares = numeros2.every((par) => {
  return par % 2 === 0;
});

console.log(todosValoresPares);
