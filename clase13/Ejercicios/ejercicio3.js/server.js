// Importamos los módulos necesarios
const net = require('net');
const { v1: uuidv1 } = require('uuid');

// Creamos el servidor TCP
const server = net.createServer((socket) => {
    // Generamos un UUID v1 basado en el tiempo
    const uuid = uuidv1();

    // Creamos un objeto JSON con el UUID
    const response = JSON.stringify({
        mensaje: "Aquí está tu UUID v1",
        uuid: uuid
    });

    // Enviamos el JSON al cliente
    socket.write(response);

    // Manejamos el evento 'end' cuando la conexión se cierra
    socket.on('end', () => {
        console.log('Conexión finalizada');
    });
});

// El servidor escucha en el puerto 8080
server.listen(8080, () => {
    console.log('Servidor TCP escuchando en el puerto 8080');
});
