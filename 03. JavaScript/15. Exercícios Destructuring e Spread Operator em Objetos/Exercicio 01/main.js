//Acesse as propriedades "tamanhoDaBarba", "idade" e "familia" do objeto "viking" por meio do Destructuring, e logue-as no console

const viking = {
  familia: "Lothbrok",
  tamanhoDaBarba: "enorme",
  idade: 30,
};

const { familia, tamanhoDaBarba, idade } = viking;

console.log(familia);
console.log(tamanhoDaBarba);
console.log(idade);
