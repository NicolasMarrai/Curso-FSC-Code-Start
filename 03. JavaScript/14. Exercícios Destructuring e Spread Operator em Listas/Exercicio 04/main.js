//Assinale os dois primeiros valores da lista "sobremesa" a duas variáveis, e distribua o restante em apenas um,
//utilizando o Spread Operator, e logue-as no console.

const sobremesas = ["Sorvete", "Petit Gateau", "Açai", "Pudim", "Mousse"];
const [primeira, segunda, ...resto] = sobremesas;
console.log(primeira);
console.log(segunda);
console.log(resto);
