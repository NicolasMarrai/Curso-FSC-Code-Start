let sum = 1 + 1;

if (sum === 2) {
  console.log("sum is true");
} else {
  console.log("sum is not true");
}

// Testando com 1 + 2
sum = 1 + 2;

if (sum === 2) {
  console.log("sum is true");
} else {
  console.log("sum is not true");
}

if (sum === 2) {
  console.log("sum is 2");
} else if (sum === 3) {
  console.log("sum is 3");
} else {
  console.log("sum is neither 2 nor 3");
}

let sum1 = 2 + 2;
let sum2 = 3 + 3;

// Usando AND
if (sum1 === 4 && sum2 === 6) {
    console.log("sum1 is 4 and sum2 is 6");
} else {
    console.log("One or both conditions are false");
}

// Usando OR
if (sum1 === 4 || sum2 === 6) {
    console.log("At least one condition is true");
} else {
    console.log("Both conditions are false");
}

let number = (sum === 2) ? 2 : 4;

console.log(number); // Deve imprimir 4, pois sum não é igual a 2

let car = "Tesla";

switch (car) {
    case "Mercedes":
        console.log("Mercedes is beautiful");
        break;
    case "Ferrari":
        console.log("Ferrari is very red");
        break;
    case "Tesla":
        console.log("Tesla is very smart");
        break;
    default:
        console.log("Unknown car");
}