const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese una oración:
let oracion = prompt("Ingresa una oración:");

// Función:
function procesarOracion(oracion) {
    // 1. Quitar los espacios en blanco al principio y al final
    let oracionSinEspacios = oracion.trim();

    // 2. Dividir la oración en palabras
    let palabras = oracionSinEspacios.split(" ");

    // 3. Encontrar la posición de la primera aparición de la palabra "javascript"
    let posicionJavascript = palabras.indexOf("javascript");

    // 4. Reemplazar todas las vocales 'a' por '@'
    let palabrasModificadas = palabras.map(palabra => palabra.replace(/a/g, '@'));
    // /a/g indica que se debe buscar todas las apariciones del carácter 'a' en la cadena 
    //(la bandera g es para global, lo que significa que reemplazará todas las apariciones, 
    //no solo la primera).

    // 5. Convertir la oración a una cadena de palabras separadas por guiones
    let oracionFinal = palabrasModificadas.join("-");

    // Devolver el resultado
    return {
        oracion: oracionFinal,
        posicionJavascript: posicionJavascript
    };
}

// Llamada a la función y mostrar el resultado
let resultado = procesarOracion(oracion);
console.log("Resultado:", resultado);

