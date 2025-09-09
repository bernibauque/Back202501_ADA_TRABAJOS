// Ejercicio 1: Conversor de monedas (Antes era el ejercicio 5)
// Solicita al usuario un monto en dólares y una tasa de cambio a pesos.
// Usa una función flecha para convertir el monto a pesos.

const prompt = require('prompt-sync')();

const convertirADolares = (monto, tasa) => monto * tasa;

let monto = parseFloat(prompt("Ingresa el monto en dólares:"));
let tasa = parseFloat(prompt("Ingresa la tasa de cambio a pesos:"));
let resultado = convertirADolares(monto, tasa);

console.log(`El monto en pesos es: ${resultado}`);
