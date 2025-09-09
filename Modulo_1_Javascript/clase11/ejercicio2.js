// Ejercicio 2:
// Crear una función que recibe un string y lo convierte en una URL. 
// Ej: “pepito” es devuelto como “http://www.pepito.com

const prompt = require('prompt-sync')();

function convertirAUrl() {
    let nombre = prompt("Ingresa un nombre para la URL:");
    const url = `http://www.${nombre}.com`;
    return url;
}

// Ejemplo de uso
let resultado2 = convertirAUrl();
console.log(`La URL es: ${resultado2}`);
