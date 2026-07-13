//Exemplo do método some
// Lista de números
const numeros = [2, 5, 8, 1, 4];

// Verifica se algum número é maior que 10
const temNumeroMaiorQue10 = numeros.some(numero => numero > 10);

// Loga o resultado
console.log("Tem número maior que 10?", temNumeroMaiorQue10); // Deve retornar FALSE

// Testando com um número maior que 10
const numerosAlterados = [2, 5, 8, 1, 11];
const temNumeroMaiorQue10Alterado = numerosAlterados.some(numero => numero > 10);
console.log("Tem número maior que 10?", temNumeroMaiorQue10Alterado); // Deve retornar TRUE

//Exemplo do método every
// Lista de números
const numeros = [1, 2, 3, 4, 5];

// Verifica se todos os números são maiores que 1
const todosSaoMaioresQue1 = numeros.every(item => item > 1);

// Loga o resultado
console.log("Todos são maiores que 1?", todosSaoMaioresQue1); // Deve retornar FALSE

// Testando com todos os números maiores que 1
const numerosAlterados = [2, 3, 4, 5, 6];
const todosSaoMaioresQue1Alterado = numerosAlterados.every(item => item > 1);
console.log("Todos são maiores que 1?", todosSaoMaioresQue1Alterado); // Deve retornar