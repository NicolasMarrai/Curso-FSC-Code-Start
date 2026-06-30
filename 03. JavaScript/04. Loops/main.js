// Exemplo de for loop
for (let index = 0; index < 10; index++) {
  console.log(index);
}

// Exemplo de for loop com lista de carros
const cars = ["Ferrari", "Tesla", "Mercedes"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// Exemplo de for...of
for (let car of cars) {
  console.log(car);
}

// Exemplo de forEach
cars.forEach(function (car) {
  console.log(car);
});

// Exemplo de while loop
let index = 0;

while (index < 10) {
  console.log("Index é menor do que 10");
  index++;
}

// Exemplo de for...in
const person = {
  name: "Jane",
  age: 21,
};

for (let property in person) {
  console.log(person[property]);
}
