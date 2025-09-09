// Ejercicio 3 - Calculadora Simple: Escribe un programa que pida al usuario dos números y una operación 
// (suma, resta, multiplicación o división). Luego, realiza la operación indicada y muestra el resultado en la consola.

const prompt = require("prompt-sync")();

// Pedir al usuario que ingrese dos números y la operación
let num1 = prompt("Ingrese el primer número: ");
let num2 = prompt("Ingrese el segundo número: ");
let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicación, división): ");

// Definir variable para guardar el resultado de la operación
let resultado;

// Realizar la operación indicada
if (operacion === "suma") {
    resultado = num1 + num2;
} else if (operacion === "resta") {
    resultado = num1 - num2;
} else if (operacion === "multiplicacion") {
    resultado = num1 * num2;
} else if (operacion === "division") {
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        console.log("Error: No se puede dividir por cero.");
    }
} else {
    console.log("Operación no válida.");
}

// Mostrar el resultado de la operación si no hubo errores
if (resultado !== undefined) {
    console.log("El resultado de la operación", operacion, "es:", resultado);
}
