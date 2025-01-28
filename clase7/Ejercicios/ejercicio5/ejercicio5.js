const net = require('net');

let connectionCount = 0; // Contador de conexiones.

const server = net.createServer((socket) => {
    connectionCount++; // Incrementa el contador.
    console.log(`Nuevo cliente conectado. Total de conexiones: ${connectionCount}`);

    // Envía el número de conexiones al cliente.
    socket.write(`Bienvenido. Eres el cliente número ${connectionCount}.\n`);

    // Evento 'close': Reduce el contador cuando un cliente se desconecta.
    socket.on('close', () => {
        connectionCount--;
        console.log(`Cliente desconectado. Total de conexiones: ${connectionCount}`);
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000.');
});

