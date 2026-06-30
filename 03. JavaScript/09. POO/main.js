// Definindo a classe Person
class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  // Método para obter o nome completo
  getFullName() {
    console.log(`${this.firstname} ${this.lastname}`);
  }

  // Método estático
  static speak() {
    console.log("Hello World");
  }
}

// Instanciando a classe Person
const person1 = new Person("Nicolas", "Marrai", 40);
console.log(person1); // Exibe o objeto person1
person1.getFullName(); // Exibe "Gene 2"

// Instanciando outra pessoa
const person2 = new Person("Alice", "Smith", 30);
console.log(person2); // Exibe o objeto person2

// Chamando o método estático
Person.speak(); // Exibe "Hello World"

// Definindo a classe Animal
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Método para o animal fazer barulho
  speak() {
    console.log(`${this.name} made some noise`);
  }
}

// Instanciando a classe Animal
const animal = new Animal("Simba");
animal.speak(); // Exibe "Simba made some noise"

// Definindo a classe Dog que estende Animal
class Dog extends Animal {
  constructor(name) {
    super(name); // Chama o construtor da classe pai
  }

  // Sobrescrevendo o método speak
  speak() {
    console.log(`${this.name} barked`); // Exibe que o cachorro latiu
  }
}

// Instanciando a classe Dog
const dog = new Dog("Bob");
dog.speak(); // Exibe "Bob barked"
