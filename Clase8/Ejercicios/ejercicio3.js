const prompt = require('prompt-sync')();

// Pedimos al usuario que ingrese dos números
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

// Calculamos la suma de los dos números
let suma = numero1 + numero2;

// Mostramos el resultado en la consola
console.log("La suma de los números es: " + suma);
