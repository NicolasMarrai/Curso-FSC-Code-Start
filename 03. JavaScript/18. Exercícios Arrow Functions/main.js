//1. Converta as funcções abaixos para Arrow Functions.

//Função Normal
function somar(a, b) {
  return a + b;
}

//Arrow Functions
const somarArrow = (a, b) => a + b;

console.log(somar(2, 3));
console.log(somarArrow(2, 3));

//Função Normal
function verificarNegativo(numero) {
  return numero < 0;
}

//Arrow Functions
const verificarNegativoArrow = (numero) => numero < 0;

console.log(verificarNegativo(-8));
console.log(verificarNegativoArrow(-8));
console.log(verificarNegativo(8));
console.log(verificarNegativoArrow(8));

//Função Normal
function criarUsuario(nome, idade) {
  return {
    nome,
    idade,
  };
}

//Arrow Functions
const criarUsuarioArrow = (nome, idade) => ({
  nome,
  idade,
});

//Função Normal
setTimeout(function () {
  console.log("Hello world!");
}, 1000);

//Arrow Functions
setTimeout(() => {
  console.log("Hello world!");
}, 1000);
