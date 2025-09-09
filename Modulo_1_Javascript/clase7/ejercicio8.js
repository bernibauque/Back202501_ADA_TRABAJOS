//Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit.
// Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
// Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
// Pista 2: La fórmula puede representarse asi: 
// let fahrenheit = celsius * 9 / 5 + 32; 

const prompt = require("prompt-sync")();

// Pedir al usuario que ingrese la temperatura en grados Celsius
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

// Aplicar la fórmula de conversión a Fahrenheit
let fahrenheit = celsius * 9 / 5 + 32;

// Mostrar el resultado
console.log("La temperatura " + celsius + " grados Celsius es equivalente a " + fahrenheit + " grados Fahrenheit.");

