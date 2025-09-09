/*
Ejercicio 5: Números Naturales
Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una cifra 
que muestre lo mínimo que le falta para ser un número de 2 cifras; de lo contrario, 
que muestre lo mínimo que le falta para ser un número de 3 cifras. Considerar que 
el usuario ingresa números de hasta dos cifras.
*/

const prompt = require('prompt-sync')();

// Pide al usuario que ingrese un número natural de hasta 2 cifras
let numero = parseInt(prompt("Ingresa un número natural de hasta 2 cifras:"));

// Verifica si el número tiene una cifra
if (numero < 10) {
    // Calcula cuánto le falta para ser un número de 2 cifras
    let faltaParaDosCifras = 10 - numero;
    console.log(`Faltan ${faltaParaDosCifras} para ser un número de 2 cifras.`);
} else {
    // Calcula cuánto le falta para ser un número de 3 cifras
    let faltaParaTresCifras = 100 - numero;
    console.log(`Faltan ${faltaParaTresCifras} para ser un número de 3 cifras.`);
}
