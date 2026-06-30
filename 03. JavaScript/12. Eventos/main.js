// Selecionando o botão de submit (ID conforme HTML)
const submitButton = document.querySelector("#submit-button");

// Adicionando um evento de clique ao botão (proteção contra null)
if (submitButton) {
  submitButton.addEventListener("click", function (e) {
    // Impedindo o comportamento padrão do botão de submit
    e.preventDefault();

    // Selecionando os inputs de nome e email
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");

    // Pegando os valores dos inputs
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    // Verificando se os campos estão preenchidos
    if (nameValue === "" || emailValue === "") {
      alert("Please fill out all the fields.");
      return; // Saindo da função se os campos não estiverem preenchidos
    }

    // Selecionando o formulário (ID conforme HTML)
    const myForm = document.querySelector("#my-form");

    // Mudando o background do formulário (se existir)
    if (myForm) myForm.style.background = "lightgreen";

    // Selecionando os itens para exibir os valores
    const items = document.querySelector(".items");
    if (items) {
      if (items.firstElementChild)
        items.firstElementChild.textContent = nameValue; // Atualizando o primeiro item com o nome
      if (items.children[1]) items.children[1].textContent = emailValue; // Atualizando o segundo item com o email
    }

    // Mudando o background do body
    document.body.style.background = "white"; // Mudando o background do body
  });
} else {
  console.warn("submit button not found: #submit-button");
}
