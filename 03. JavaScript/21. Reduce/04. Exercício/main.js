//4. Soma dos Preços dos Produtos na Lista de Desejos: Guarde em uma variável a soma dos preços
// de todos os produtos na sua lista de desejos.

const listaDeDesejos = [
  { nome: "Produto 1", preco: 100 },
  { nome: "Produto 2", preco: 200 },
  { nome: "Produto 3", preco: 50 },
  { nome: "Produto 4", preco: 300 },
  { nome: "Produto 5", preco: 25 },
  { nome: "Produto 6", preco: 22 },
];

const total = listaDeDesejos.reduce((aux, soma) => {
  return aux + soma.preco;
}, 0);

console.log(total);
