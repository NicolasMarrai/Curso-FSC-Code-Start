const names = ["Nicolas", "Joao", "Felipe", 10, false];

const joao = names[1];
console.log(joao);

names.push("Nicolle");
console.log(names);

names.unshift(20);
console.log(names);

names.pop();
console.log(names);
names.pop();
console.log(names);
names.pop();
console.log(names);

names[3] = "Gustavo";
console.log(names);

console.log(names.indexOf("Nicolas"));

const sortedNames = names.sort();
console.log(sortedNames);
