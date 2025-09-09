// Ejercicio 6: 
// Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. 
// Luego, ejecutar la función probando diferentes valores.

const prompt = require('prompt-sync')();

function calculadorIMC() {
    let altura = parseFloat(prompt("Ingresa tu altura en metros:"));
    let peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
    let imc = peso / (altura * altura);
    return imc;
}

// Ejemplo de uso
let resultado6 = calculadorIMC();
console.log(`Tu IMC es: ${resultado6}`);
