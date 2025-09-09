const numbers = [6, 1, 34, 94, 3, 17];

const sumaTotal = numbers.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(sumaTotal); // Debería mostrar 155
