//1. Enunciado: Encontre na lista de foguetes o objeto que tenha o valor "Japan" como país. Guarde em uma variável e log no console.

const foguetes = [
  { nome: "Foguete A", país: "Brasil", lançamento: 1 },
  { nome: "Foguete B", país: "Japan", lançamento: 2 },
  { nome: "Foguete C", país: "EUA", lançamento: 3 },
];

const japan = foguetes.find((pais) => {
  return pais.país === "Japan";
});

console.log(japan);
