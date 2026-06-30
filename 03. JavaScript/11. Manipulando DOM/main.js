// Selecionar todos os itens
const items = document.querySelector(".items");

// Remover todos os itens
//items.remove();

// Remover o primeiro item
//const firstItem = items.firstElementChild;
//console.log(firstItem.innerHTML); // Para ver o conteúdo do primeiro item
//firstItem.remove();

// Remover o último item
const lastItem = items.lastElementChild;
//lastItem.remove();

// Mudar o texto do item do meio
items.children[1].textContent = "Item 5"; // Muda o texto do segundo item (index 1)

// Mudar o HTML do último item
items.lastElementChild.innerHTML = "<h1>Hello, Rose</h1>"; // Muda o HTML do último item

// Selecionar o botão
const button = document.querySelector(".btn");

// Mudar o estilo do botão
button.style.background = "red"; // Muda o fundo do botão para vermelho
button.style.color = "blue"; // Muda a cor do texto do botão para azul
