//Exemplo 1: Filtrando Números Maiores que 10

// Lista de números
const numeros = [5, 10, 15, 20, 25, 30];

// Filtrando números maiores que 10
const numerosMaioresQue10 = numeros.filter((numero) => numero > 10);

// Logando o resultado
console.log(numerosMaioresQue10); // Saída: [15, 20, 25, 30]

//Exemplo 2: Filtrando Usuários Maiores de Idade
// Lista de usuários
const usuarios = [
  { name: "Steve Jobs", idade: 17 },
  { name: "Elon Musk", idade: 37 },
  { name: "Jeff Bezos", idade: 40 },
];

// Filtrando usuários maiores de idade (18 anos ou mais)
const usuariosMaioresDeIdade = usuarios.filter(
  (usuario) => usuario.idade >= 18,
);

// Logando o resultado
console.log(usuariosMaioresDeIdade);
// Saída: [{ name: "Elon Musk", idade: 37 }, { name: "Jeff Bezos", idade: 40 }]

//Exemplo 3: Usando a Sintaxe IF
//Você também pode usar a sintaxe if para tornar o código mais legível. Aqui está como ficaria o primeiro exemplo:

const numeros = [5, 10, 15, 20, 25, 30];

const numerosMaioresQue10 = numeros.filter((numero) => {
  if (numero > 10) {
    return true; // Adiciona à nova lista
  } else {
    return false; // Não adiciona à nova lista
  }
});

console.log(numerosMaioresQue10); // Saída: [15, 20, 25, 30]
