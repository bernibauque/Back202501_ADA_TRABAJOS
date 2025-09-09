// Ejercicio 3:
// Crear una función que recibe un string y devuelve la misma frase pero con admiración

const prompt = require('prompt-sync')();

function agregarAdmiracion() {
    let frase = prompt("Ingresa una frase:");
    return `¡${frase}!`;
}

// Ejemplo de uso
let resultado3 = agregarAdmiracion();
console.log(`La frase con admiración es: ${resultado3}`);
