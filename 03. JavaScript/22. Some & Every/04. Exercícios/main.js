//4. Exercício 4: Verificar se todos os itens da lista de desejos estão em estoque
//Enunciado: Guarde em uma variável se todos os itens da lista listaDeDesejos estão em estoque.

const listaDeDesejos = [
  { nome: "Tesla Model S", quantidadeEstoque: 0 },
  { nome: "iPhone", quantidadeEstoque: 5 },
  { nome: "Laptop", quantidadeEstoque: 3 },
];

const temNoEstoque = listaDeDesejos.every((estoque) => {
  return estoque.quantidadeEstoque > 0;
});

console.log(temNoEstoque);
