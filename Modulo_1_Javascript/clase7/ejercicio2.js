// Ejercicio 2 – Usando las variables: 
// Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso,
// y luego muestre un mensaje personalizado que incluya toda esta información.

const prompt = require("prompt-sync")();

// Pedir al usuario que ingrese su nombre, edad y peso
let nombre = prompt("Ingrese su nombre: ");
let edad = prompt("Ingrese su edad: ");
let peso = prompt("Ingrese su peso en kg: ");

// Mostrar un mensaje personalizado
console.log("Hola " + nombre + ". Tienes " + edad + " años y pesas " + peso + " kg.");

