/*
Ejercicio 6: Numero N
Hacer un programa que calcule la suma de los N primeros números naturales,
dónde N es el número límite ingresado por teclado.
*/

const prompt = require('prompt-sync')();

// Pide al usuario que ingrese el número límite N
let N = parseInt(prompt("Ingresa el número límite:"));

// Inicializa la variable para la suma
let suma = 0;

// Usa un bucle para sumar los N primeros números naturales
for (let i = 1; i <= N; i++) {
    suma += i;
}

// Muestra el resultado en pantalla
console.log("La suma de los primeros " + N + " números naturales es: " + suma);

