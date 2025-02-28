const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const readline = require('readline-sync');

// Ruta al archivo JSON
const rutaMensajes = path.join(__dirname, 'mensajes.json');

// Clave y IV para cifrado
const clave = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Función para cifrar mensajes
function cifrar(mensaje) {
    const cipher = crypto.createCipheriv('aes-256-cbc', clave, iv);
    let cifrado = cipher.update(mensaje, 'utf-8', 'hex');
    cifrado += cipher.final('hex');
    return cifrado;
}

// Función para descifrar mensajes
function descifrar(cifrado) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', clave, iv);
    let mensaje = decipher.update(cifrado, 'hex', 'utf-8');
    mensaje += decipher.final('utf-8');
    return mensaje;
}

// Función para guardar mensajes cifrados
function guardarMensaje(mensajeCifrado) {
    const mensajes = JSON.parse(fs.readFileSync(rutaMensajes, 'utf-8') || '[]');
    mensajes.push({ mensajeCifrado, fecha: new Date().toISOString() });
    fs.writeFileSync(rutaMensajes, JSON.stringify(mensajes, null, 2));
}

// Menú interactivo
while (true) {
    const opcion = readline.question(
        '¿Qué deseas hacer? (1. Cifrar mensaje, 2. Descifrar mensaje, 3. Salir): '
    );

    if (opcion === '1') {
        const mensaje = readline.question('Mensaje a cifrar: ');
        const mensajeCifrado = cifrar(mensaje);
        guardarMensaje(mensajeCifrado);
        console.log('Mensaje cifrado:', mensajeCifrado);
    } else if (opcion === '2') {
        const cifrado = readline.question('Mensaje cifrado: ');
        const mensajeDescifrado = descifrar(cifrado);
        console.log('Mensaje descifrado:', mensajeDescifrado);
    } else if (opcion === '3') {
        break;
    } else {
        console.log('Opción no válida');
    }
}
