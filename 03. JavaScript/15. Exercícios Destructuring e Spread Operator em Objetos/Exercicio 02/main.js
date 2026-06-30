// Acesse as propriedades "name" e "age" do objeto "usuario" por meio do Destructuring,
// renomeie-as para sua tradução em português, e logue-as no console.

const usuario = {
  name: "Jane Doe",
  age: 28,
};

const { name: nome, age: idade } = usuario;

console.log(nome);
console.log(idade);
