// Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.
// IMPORTANTE: la función prompt siempre devuelve un valor como cadena (string), incluso si se ingresa un número
// es por eso que tenemos que hacer mayor el desarrollo del ejercicio
const prompt = require('prompt-sync')();

function tipoDeDato(parametro) {
    // Devolver el tipo de dato del parámetro
    console.log(`El tipo de dato es: ${typeof parametro}`);
}

// Solicitar un valor al usuario
const valor = prompt("Ingrese un valor: ");

// Intentar convertir el valor a un número
const numeroConvertido = Number(valor);

// Verificar si la conversión fue exitosa
if (!isNaN(numeroConvertido) && valor.trim() !== "") {
    // Si fue exitoso y no está vacío, el tipo de dato es número
    tipoDeDato(numeroConvertido);
} else if (valor.toLowerCase() === "true" || valor.toLowerCase() === "false") {
    // Si el valor es "true" o "false", el tipo de dato es booleano
    tipoDeDato(valor.toLowerCase() === "true");
} else {
    // En todos los demás casos, el tipo de dato es string
    tipoDeDato(valor);
}

