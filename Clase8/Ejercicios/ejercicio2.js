const prompt = require('prompt-sync')();

// Pedimos al usuario que ingrese un número
let numero = parseFloat(prompt("Ingresa un número:"));

// Verificamos si el número es positivo, negativo o cero
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}
