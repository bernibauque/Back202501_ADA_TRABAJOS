const prompt = require('prompt-sync')();

// Solicitamos al usuario que ingrese un número
let numero = parseInt(prompt("Ingresa un número: "));

// Analizamos si el número es positivo, negativo o cero
if (numero > 0) {
    console.log("El número es positivo. Esto significa que está por encima de cero.");
} else if (numero < 0) {
    console.log("El número es negativo. Esto significa que está por debajo de cero.");
} else {
    console.log("El número es cero. Esto significa que no tiene valor positivo ni negativo.");
}
