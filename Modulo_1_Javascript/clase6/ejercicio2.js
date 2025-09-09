// Ejercicio 2 - Comparación de Tres Números: Escribe un programa que pida al usuario tres 
// números y determine cuál es el mayor de los tres. Muestra el número mayor en la consola.

const prompt = require("prompt-sync")();

// Pedir al usuario que ingrese tres números
let num1 = prompt("Ingrese el primer número: ");
let num2 = prompt("Ingrese el segundo número: ");
let num3 = prompt("Ingrese el tercer número: ");

// Determinar cuál es el mayor de los tres números
let mayor;

if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
} else {
    mayor = num3;
}

// Mostrar el número mayor por consola
console.log("El número mayor es:", mayor);
