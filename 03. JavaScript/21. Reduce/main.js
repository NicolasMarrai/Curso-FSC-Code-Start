//Exemplo 1: Soma dos Lançamentos de Foguetes
const foguetes = [
    { pais: 'Rússia', lancamentos: 32 },
    { pais: 'Estados Unidos', lancamentos: 23 },
    { pais: 'China', lancamentos: 16 },
    { pais: 'Índia', lancamentos: 14 },
    { pais: 'Japão', lancamentos: 0 }
];

const totalDeLancamentos = foguetes.reduce((acumulador, foguete) => {
    return acumulador + foguete.lancamentos;
}, 0);

console.log(totalDeLancamentos); // Saída: 85

//Exemplo 2: Soma de Preços de Produtos
//Agora, vamos criar um exemplo onde somamos os preços de uma lista de produtos.

const produtos = [
    { nome: 'Camiseta', preco: 29.90 },
    { nome: 'Calça', preco: 79.90 },
    { nome: 'Tênis', preco: 199.90 },
    { nome: 'Boné', preco: 39.90 }
];

const totalDePrecos = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preco;
}, 0);

console.log(totalDePrecos); // Saída: 349.60

//Exemplo 3: Contagem de Alunos em Turmas
//Neste exemplo, vamos contar o total de alunos em diferentes turmas.

const turmas = [
    { nome: 'Turma A', alunos: 25 },
    { nome: 'Turma B', alunos: 30 },
    { nome: 'Turma C', alunos: 20 },
    { nome: 'Turma D', alunos: 15 }
];

const totalDeAlunos = turmas.reduce((acumulador, turma) => {
    return acumulador + turma.alunos;
}, 0);

console.log(totalDeAlunos); // Saída: 90