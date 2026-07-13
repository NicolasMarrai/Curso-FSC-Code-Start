//2. String das Letras: Guarde em uma variável uma String que contenha todos os valores da lista "Letras".
const letras = ["A", "B", "C", "D"];

const valoresDasLetras = letras.reduce((aux, letra) => {
  return aux + letra;
}, 0);

console.log(valoresDasLetras);
