const net = require('net');
const path = require('path');

// Crear el servidor TCP
const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        // Convertir datos recibidos a una cadena y eliminar espacios en blanco
        const inputPath = data.toString().trim();

        // Verificar si la ruta es absoluta
        const isAbsolute = path.isAbsolute(inputPath);

        // Crear la respuesta basada en el tipo de ruta
        const response = isAbsolute ? 'La ruta es absoluta.' : 'La ruta es relativa.';

        // Enviar la respuesta al cliente
        socket.write(response);
    });

    // Manejar la desconexión del cliente
    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });
});

// Configurar el puerto en el que el servidor escuchará
server.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080.');
});


