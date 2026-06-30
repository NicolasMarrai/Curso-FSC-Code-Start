// Crie uma nova lista baseando-se na "melhoresSeriesDoMundo" adicionando dois novo
// valores a ela utilizando o Spread Operator, e loue-as no console.

const melhoresSeriesDoMundo = ["GOT", "Breaking Bad", "Vikings"];
const melhoresSeriesDoMundoMais2 = [
  ...melhoresSeriesDoMundo,
  "Friends",
  "The Day of the Jackal",
];
console.log(melhoresSeriesDoMundoMais2);
