const numbers = [6, 1, 34, 94, 3, 17];

const multiplicacionTotal = numbers.reduce((acumulador, numero) => acumulador * numero, 1);

console.log(multiplicacionTotal); // Debería mostrar 977976
