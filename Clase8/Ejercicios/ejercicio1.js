const prompt = require('prompt-sync')();

// Solicitamos al usuario que ingrese un número
let numero = parseFloat(prompt("Ingresa un número:"));

// Calculamos el doble del número ingresado
let doble = numero * 2;

// Mostramos el resultado en la consola
console.log("El doble de tu número es: " + doble);
