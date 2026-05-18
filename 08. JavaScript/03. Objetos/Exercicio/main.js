const student = {
  name: "Nicolas",
  age: 24,
  courses: [
    "HTML/CSS",
    "JavaScript",
    "Java",
    "Programação Orientada a Objetos",
  ],
  isGraduated: false,
  address: {
    city: "Uberaba",
    state: "MG",
  },
};

//console.log(student.name);
//console.log(student.age);

const { name, age, address } = student;

console.log(name);
console.log(age);
console.log(student.courses[0]);
console.log(student.isGraduated);

console.log(student.address);
