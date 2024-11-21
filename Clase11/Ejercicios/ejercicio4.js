const prompt = require('prompt-sync')();

// Solicitamos al usuario que ingrese un número
let numero = parseInt(prompt("Ingresa un número para verificar si es par o impar: "));

// Determinamos si el número es par o impar
if (numero % 2 === 0) {
    console.log("El número es par. Esto significa que se puede dividir en dos partes iguales.");
} else {
    console.log("El número es impar. Esto significa que no se puede dividir en dos partes iguales.");
}
