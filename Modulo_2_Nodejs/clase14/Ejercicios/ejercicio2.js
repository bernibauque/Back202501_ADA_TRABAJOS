const readlineSync = require('readline-sync');
const crypto = require('crypto');

// Función para generar un hash
function generarHash(texto) {
    const hash = crypto.createHash('sha256');
    hash.update(texto);
    return hash.digest('hex');
}

// Opciones del menú
const opciones = ['Ver mensaje de bienvenida', 'Generar hash', 'Salir'];

// Mostrar el menú
const seleccion = readlineSync.keyInSelect(opciones, 'Elige una opción:');

// Procesar la opción seleccionada
switch (seleccion) {
    case 0:
        console.log('¡Bienvenido a la aplicación de Node.js!');
        break;
    case 1:
        const texto = readlineSync.question('Introduce el texto para generar el hash: ');
        console.log(`Hash generado: ${generarHash(texto)}`);
        break;
    case 2:
        console.log('Saliendo...');
        break;
    default:
        console.log('Opción no válida');
}
