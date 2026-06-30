// Acesse, utilizando o Destructuring, todas as propriedades dentro dos objetos "dadosPessoais" e
// "dadosProfissionais" do objeto "piloto", logue-as no console

const piloto = {
  dadosPessoais: {
    name: "Ayrton Senna",
    idade: 34,
  },
  dadosProfissionais: {
    categoria: "Fórmula 1",
    conquistas: "É o melhor de todos os tempos",
  },
};

const {
  dadosPessoais: { name, idade },
  dadosProfissionais: { categoria, conquistas },
} = piloto;

console.log(name);
console.log(idade);
console.log(categoria);
console.log(conquistas);
