const person = {
  firstName: "Nicolas",
  lastName: "Marrai",
  age: "24",
  hobbies: ["assistir anime", "Jogar", "Estudar"],
  dog: {
    name: "Simba",
    age: 4,
  },
};

//const firstName = person.firtsName;
//const lastname = person.lastName;
//const age = person.age;
//const hobbies = person.hobbies;

const {
  firstName: primeiroNome,
  lastName,
  age,
  hobbies,
  dog: { name: dogName },
} = person;

console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);

console.log(person.hobbies[2]);

console.log(person);
console.log(person.dog);
console.log(person.dog.age);
console.log(dogName);
