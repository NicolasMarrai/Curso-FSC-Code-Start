//2. Enunciado: Encontre na lista de desejos a posição que se encontra o item com o título igual a "carro de Fórmula 1".

const listaDeDesejos = [
  { título: "Bicicleta" },
  { título: "Skate" },
  { título: "carro de Fórmula 1" },
  { título: "Patins" },
];

const carroIndex = listaDeDesejos.findIndex((carro) => {
  return carro.título === "carro de Fórmula 1";
});

console.log(`index: ${carroIndex}`);
