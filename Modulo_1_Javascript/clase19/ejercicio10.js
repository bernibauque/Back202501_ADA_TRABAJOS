// Crear una función que recibe un string en minúsculas, lo convierta a mayúsculas y lo retorne.

const prompt = require('prompt-sync')();

function convertirMayusculas() {
    const frase = prompt("Ingrese una frase en minúsculas: ");

    // Convertir la frase a mayúsculas
    const fraseMayusculas = frase.toUpperCase();

    console.log(`Frase en mayúsculas: ${fraseMayusculas}`);
}

convertirMayusculas();
