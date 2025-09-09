/* 
Ejercicio 3: Número secreto
Escribí un programa que piense un número de forma aleatoria del 1 al 10 y 
le pida al usuario que lo trate de adivinar. Si el número es correcto debe 
imprimir en la consola “Felicitaciones, ¡ese era!", de lo contrario, debe 
imprimir "Lo siento, ¡intenta nuevamente!"
 */

const prompt = require('prompt-sync')();

// Define un número aleatorio del 1 al 10
let numeroAleatorio = 7; // Puedes cambiar este número para probar diferentes casos

// Pide al usuario que adivine el número
let numeroUsuario = parseInt(prompt("Adivina el número del 1 al 10:"));

// Verifica si el número adivinado es correcto
if (numeroUsuario === numeroAleatorio) {
    console.log("Felicitaciones, ese era!");
} else {
    console.log("Lo siento, intenta nuevamente!");
}


