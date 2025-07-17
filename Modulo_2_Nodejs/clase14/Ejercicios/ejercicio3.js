const crypto = require('crypto');
const readlineSync = require('readline-sync');

// Solicitar al usuario que ingrese un texto
const texto = readlineSync.question('Ingresa un texto para generar el hash: ');

// Crear un objeto Hash con el algoritmo 'sha256'
const hash = crypto.createHash('sha256');

// Actualizar el hash con el texto de entrada
hash.update(texto);

// Obtener el hash en formato hexadecimal
const hashHex = hash.digest('hex');

// Mostrar el hash en la consola
console.log(`Hash SHA-256 del texto ingresado: ${hashHex}`);
