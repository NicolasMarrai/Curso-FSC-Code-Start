//3. Soma das Idades das Pessoas que Votaram: Guarde em uma variável a soma das idades de todas as pessoas que votaram.

const pessoas = [
  { idade: 25, votou: true },
  { idade: 30, votou: false },
  { idade: 22, votou: true },
];

const totalDePessoas = pessoas.reduce((aux, soma) => {
  return aux + soma.idade;
}, 0);

console.log(totalDePessoas)