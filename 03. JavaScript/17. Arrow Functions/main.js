//1. Exemplo da função somar

// Função normal
function somar(a, b) {
    return a + b;
}

// Usando Arrow Function
const somarArrow = (a, b) => a + b;

// Testando as funções
console.log(somar(2, 2)); // Saída: 4
console.log(somarArrow(2, 2)); // Saída: 4

//2. Exemplo da função VerificarPositivo

// Função normal
function verificarPositivo(numero) {
    return numero >= 0;
}

// Usando Arrow Function
const verificarPositivoArrow = numero => numero >= 0;

// Testando as funções
console.log(verificarPositivo(2)); // Saída: true
console.log(verificarPositivoArrow(2)); // Saída: true
console.log(verificarPositivo(-1)); // Saída: false
console.log(verificarPositivoArrow(-1)); // Saída: false

//3. Exemplo da função retornaObjeto

// Função normal
function retornaObjeto() {
    return {
        nome: 'John',
        sobrenome: 'Doe'
    };
}

// Usando Arrow Function
const retornaObjetoArrow = () => ({
    nome: 'John',
    sobrenome: 'Doe'
});

// Testando as funções
console.log(retornaObjeto()); // Saída: { nome: 'John', sobrenome: 'Doe' }
console.log(retornaObjetoArrow()); // Saída: { nome: 'John', sobrenome: 'Doe' }

//4. Exemplo com this em Arrow Functions

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    printNameArrow = () => {
        console.log(this.nome);
    }

    printNameFunction() {
        console.log(this.nome);
    }
}

const bob = new Pessoa('Bob');

// Testando as funções
bob.printNameArrow(); // Saída: Bob
bob.printNameFunction(); // Saída: Bob

// Testando o comportamento do `this` em um setTimeout
setTimeout(bob.printNameArrow, 1000); // Saída: Bob
setTimeout(bob.printNameFunction.bind(bob), 1000); // Saída: Bob

//5. Exemplo de método de objeto

const obj = {
    message: 'Hello World',
    printMessage: function() {
        console.log(this.message);
    },
    printMessageArrow: () => {
        console.log(this.message); // Aqui `this` não se refere ao objeto `obj`
    }
};

// Testando as funções
obj.printMessage(); // Saída: Hello World
obj.printMessageArrow(); // Saída: undefined