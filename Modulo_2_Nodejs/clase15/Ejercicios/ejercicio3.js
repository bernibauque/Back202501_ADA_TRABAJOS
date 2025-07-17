const net = require('net');
const crypto = require('crypto');

// Clave secreta para cifrado
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

// Crear servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Escuchar mensajes del cliente
    socket.on('data', (data) => {
        const mensajeCifrado = data.toString().trim();
        const mensajeDescifrado = descifrar(mensajeCifrado);
        console.log('Mensaje recibido:', mensajeDescifrado);

        // Responder al cliente
        const respuesta = cifrar(`Servidor: Recibí tu mensaje (${mensajeDescifrado})`);
        socket.write(respuesta);
    });

    // Manejar desconexión
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

// Iniciar servidor
server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});