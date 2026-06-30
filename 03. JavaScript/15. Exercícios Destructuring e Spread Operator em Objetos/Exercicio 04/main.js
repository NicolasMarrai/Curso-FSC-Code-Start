// Assinale as propriedades "a" e "b" do objeto abaixo a duas variaveis, e distribua as restantes em uma.,

const obj = { a: 10, b: 20, c: 30, d: 40 };

const { a, b, ...resto } = obj;

console.log(a, b, resto);
