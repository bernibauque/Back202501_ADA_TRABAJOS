const readlineSync = require('readline-sync');

// Solicitar al usuario que ingrese una lista de números separados por comas
const entrada = readlineSync.question('Ingresa una lista de números separados por comas: ');

// Convertir la entrada en un array de números
const numeros = entrada.split(',').map(num => parseInt(num.trim(), 10));

// Ordenar los números de menor a mayor
numeros.sort((a, b) => a - b);

// Mostrar la lista de números ordenada
console.log(`Lista de números ordenada: ${numeros.join(', ')}`);
