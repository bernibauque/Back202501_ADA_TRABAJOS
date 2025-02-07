// Importa el módulo 'net' para crear un servidor TCP.
const net = require('net');

// Crea una nueva instancia del servidor TCP.
const server = net.createServer();

// Maneja el evento 'connection' para aceptar nuevas conexiones de clientes.
server.on('connection', (socket) => {
    // Muestra en consola que un nuevo cliente se ha conectado.
    console.log('Nuevo cliente conectado:', socket.remoteAddress + ":" + socket.remotePort);

    // Maneja el evento 'data' para recibir mensajes de los clientes.
    socket.on('data', (data) => {
        // Muestra en consola el mensaje recibido del cliente.
        console.log('Mensaje del cliente ' + socket.remoteAddress + ":" + socket.remotePort + ': ' + data.toString());
        // Envía una respuesta al cliente confirmando la recepción del mensaje.
        socket.write('Mensaje recibido');
    });

    // Maneja el evento 'close' para saber cuándo un cliente se desconecta.
    socket.on('close', () => {
        // Muestra en consola que el cliente se ha desconectado.
        console.log('Cliente desconectado:', socket.remoteAddress + ":" + socket.remotePort);
    });

    // Maneja el evento 'error' para mostrar cualquier error que ocurra.
    socket.on('error', (err) => {
        console.log('Error:', err.message);
    });
});

// El servidor escucha en el puerto 5000.
server.listen(5000, () => {
    // Muestra en consola que el servidor está escuchando en el puerto 5000.
    console.log('Servidor escuchando en el puerto 5000');
});
