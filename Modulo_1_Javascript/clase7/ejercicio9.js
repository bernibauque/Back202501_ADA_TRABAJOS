// Ejercicio 9: Cálculo del IMC: Escribe un programa que calcule el Índice de Masa Corporal (IMC). 
// Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
// Pista 1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
// Pista 2: La fórmula puede representarse asi:
// let imc = peso / (altura * altura);

const prompt = require("prompt-sync")();

// Pedir al usuario que ingrese su peso en kg
let peso = parseFloat(prompt("Ingrese su peso en kg: "));

// Pedir al usuario que ingrese su altura en metros
let altura = parseFloat(prompt("Ingrese su altura en metros: "));

// Calcular el IMC utilizando la fórmula
let imc = peso / (altura * altura);

// Mostrar el resultado del IMC
console.log("Su IMC es: " + imc);


