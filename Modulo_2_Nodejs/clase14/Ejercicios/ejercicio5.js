const crypto = require('crypto');
const readlineSync = require('readline-sync');

// Generar una clave e IV aleatorios
const key = crypto.randomBytes(32); // Clave de 32 bytes para AES-256
const iv = crypto.randomBytes(16);  // IV de 16 bytes para AES-256

// Función para cifrar texto
function cifrarTexto(texto) {
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let cifrado = cipher.update(texto, 'utf8', 'hex');
    cifrado += cipher.final('hex');
    return cifrado;
}

// Función para descifrar texto
function descifrarTexto(cifrado) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let descifrado = decipher.update(cifrado, 'hex', 'utf8');
    descifrado += decipher.final('utf8');
    return descifrado;
}

// Solicitar al usuario que ingrese un texto
const texto = readlineSync.question('Ingresa un texto para cifrar: ');

// Cifrar el texto ingresado
const textoCifrado = cifrarTexto(texto);
console.log(`Texto cifrado: ${textoCifrado}`);

// Descifrar el texto cifrado
const textoDescifrado = descifrarTexto(textoCifrado);
console.log(`Texto descifrado: ${textoDescifrado}`);
