const net = require('net');
const path = require('path');

// Crear el servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Manejar datos recibidos del cliente
    socket.on('data', (data) => {
        // Convertir datos recibidos a una cadena y eliminar espacios en blanco
        const inputPath = data.toString().trim();

        // Normalizar la ruta usando path.normalize
        const normalizedPath = path.normalize(inputPath);

        // Enviar la ruta normalizada al cliente
        socket.write(normalizedPath);
    });

    // Manejar la desconexión del cliente
    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });
});

// Configurar el puerto en el que el servidor escuchará
server.listen(8081, () => {
    console.log('Servidor escuchando en el puerto 8081.');
});
