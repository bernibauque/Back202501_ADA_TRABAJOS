// Instalación de la biblioteca prompt-sync (ejecutar en terminal):
// npm install prompt-sync

const prompt = require('prompt-sync')();

let precioOriginal = parseFloat(prompt("Ingresa el precio original: "));
let porcentajeDescuento = parseFloat(prompt("Ingresa el porcentaje de descuento: "));

if (precioOriginal > 0 && porcentajeDescuento >= 0 && porcentajeDescuento <= 100) {
    let descuento = (precioOriginal * porcentajeDescuento) / 100;
    let precioFinal = precioOriginal - descuento;
    console.log(`El precio final después del descuento es: $${precioFinal}`);
} else {
    console.log("Por favor, ingresa valores válidos.");
}

// prompt-sync es una librería de JavaScript que proporciona una manera sencilla de realizar
// lecturas de entrada desde la consola de manera sincrónica. Esto significa que puedes
// pedir al usuario que ingrese datos y, a continuación, continuar con la ejecución del
// programa solo después de que el usuario haya ingresado la información, algo que no es
// tan directo de lograr con las funciones nativas de JavaScript como prompt(), especialmente
// cuando trabajamos en un entorno de Node.js (fuera del navegador).

// parseFloat() es una función incorporada en JavaScript que se utiliza para convertir una cadena
// de texto (string) en un número de punto flotante (decimal). Si la cadena no se puede convertir
// en un número válido, devuelve NaN (Not a Number).


