// Exemplo de uso do startsWith
console.log("Exemplo de startsWith");

let texto = "ser ou não ser. Eis a questão.";

// Checando se a string começa com "ser"
let comecaComSer = texto.startsWith("ser");
console.log("Começa com 'ser':", comecaComSer); // Deve retornar true

// Checando se a string começa com "não ser"
let comecaComNaoSer = texto.startsWith("não ser");
console.log("Começa com 'não ser':", comecaComNaoSer); // Deve retornar false

// Checando a partir de uma posição específica
let comecaComSerAPartirDe7 = texto.startsWith("ser", 7);
console.log("Começa com 'ser' a partir da posição 7:", comecaComSerAPartirDe7); // Deve retornar true

let comecaComNaoSerAPartirDe8 = texto.startsWith("não ser", 8);
console.log("Começa com 'não ser' a partir da posição 8:", comecaComNaoSerAPartirDe8); // Deve retornar false

// Exemplo de uso do endsWith
console.log("\nExemplo de endsWith");

let terminaComQuestao = texto.endsWith("questão.");
console.log("Termina com 'questão.':", terminaComQuestao); // Deve retornar true

// Checando com letra maiúscula
let terminaComQuestaoMaiusculo = texto.endsWith("Questão.");
console.log("Termina com 'Questão.':", terminaComQuestaoMaiusculo); // Deve retornar false