// Ejercicio 4:
// Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.

const prompt = require('prompt-sync')();

function calcularEdadPerro() {
    let edadHumana = parseInt(prompt("Ingresa la edad en años humanos:"));
    const factorConversion = 7;
    let edadPerro = edadHumana * factorConversion;
    return edadPerro;
}

// Ejemplo de uso
let resultado4 = calcularEdadPerro();
console.log(`La edad del perro en años de perro es: ${resultado4}`);
