const prompt = require('prompt-sync')();

// Solicitamos al usuario que ingrese un número entero
let numero = parseInt(prompt("Ingresa un número entero:"));

// Verificamos si el número es par o impar
if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}
