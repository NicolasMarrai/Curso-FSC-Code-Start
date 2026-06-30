const participantes = ["Carlos", "Amanda", "Bruno"];
console.log(participantes);

//Adicione:um nome no início da lista;
participantes.unshift("Nicolas");
console.log(participantes);

//Adicione:um nome no final da lista;
participantes.push("Nicolle");
console.log(participantes);

//Remova o último nome da lista.
participantes.pop();
console.log(participantes);

//Altere o nome "Bruno" para outro nome de sua escolha.
participantes[3] = "Gabriel";
console.log(participantes);

//Ordene a lista em ordem alfabética.
console.log(participantes.sort());

// Exiba: a lista final;
console.log(participantes);
// Exiba: a quantidade de participantes;
console.log(participantes.length);
// Exiba: se a variável participants é realmente um array.
console.log(Array.isArray(participantes));
