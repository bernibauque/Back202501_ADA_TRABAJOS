/* Ejercicio para clase 1: Calculando la Edad
Escribí un programa que le pida al usuario su año de
nacimiento e imprima su edad actual en la consola con la frase
"Tienes X años" (siendo X la cantidad de años).
Por ejemplo, asumiendo que el año actual es 2024 y el usuario ingresa 1998, 
el programa debe imprimir en la consola: “Tienes 26 años”.
*/

const prompt = require('prompt-sync')();

// Le pedimos al usuario su año de nacimiento
let anioNacimiento = parseInt(prompt("Ingresa tu año de nacimiento: "));

// Definir el año actual
const anioActual = 2024;

// Calcular la edad
let edad = anioActual - anioNacimiento;

// Imprimimos
console.log(`Tienes ${edad} años.`)






















