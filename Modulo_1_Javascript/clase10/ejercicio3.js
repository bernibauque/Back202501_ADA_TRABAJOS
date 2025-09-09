// Ejercicio 3: While
// Crea un programa que solicite al usuario ingresar números 
// continuamente hasta que el usuario ingrese un número negativo. 
// Luego, imprime la suma de todos los números ingresados.

const prompt = require('prompt-sync')();

let suma = 0;
let numero = parseInt(prompt("Ingrese un número:"));

while (numero >= 0) {
    suma += numero;
    numero = parseInt(prompt("Ingrese un número:"));
}

console.log(`La suma de todos los números ingresados es: ${suma}`);

