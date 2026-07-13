//2. Criar uma lista usando o map, baseando-se na lista usuários, que contenha a idade de cada usuário multiplicada por 2.

const usuarios = [
  { nome: "John", idade: 20 },
  { nome: "Jane", idade: 27 },
  { nome: "Doe", idade: 18 },
];

const usuariosComIdadeMultiplicadaPor2 = usuarios.map((item) => ({
  ...item,
  idade: item.idade * 2,
}));

console.log(usuariosComIdadeMultiplicadaPor2);
