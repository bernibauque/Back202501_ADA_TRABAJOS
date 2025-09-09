// Ejercicio 1: 
// Crear una función que convierta pulgadas en centímetros. 
// Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

const prompt = require('prompt-sync')();

function pulgadasACentimetros() {
    let pulgadas = parseFloat(prompt("Ingresa las pulgadas:"));
    const centimetrosPorPulgada = 2.54;
    let centimetros = pulgadas * centimetrosPorPulgada;
    return centimetros;
}

// Ejemplo de como podemos usarlo
let resultado1 = pulgadasACentimetros();
console.log(`El equivalente en centímetros es: ${resultado1}`);

