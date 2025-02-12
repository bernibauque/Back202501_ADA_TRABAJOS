const net = require('net');
const path = require('path');

// Crear el servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Manejar datos recibidos del cliente
    socket.on('data', (data) => {
        // Convertir datos recibidos a una cadena y eliminar espacios en blanco
        const inputPath = data.toString().trim();

        // Obtener la base del nombre, el directorio y la extensión del archivo
        const baseName = path.basename(inputPath);
        const dirName = path.dirname(inputPath);
        const extName = path.extname(inputPath);

        // Formatear la información para enviar al cliente
        const response = `Base del nombre: ${baseName}\n` +
            `Directorio: ${dirName}\n` +
            `Extensión del archivo: ${extName}`;

        // Enviar la información al cliente
        socket.write(response);
    });

    // Manejar la desconexión del cliente
    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });
});

// Configurar el puerto en el que el servidor escuchará
server.listen(8082, () => {
    console.log('Servidor escuchando en el puerto 8082.');
});
