const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado.');

    const historial = [];

    // Enviar historial al cliente cuando se conecta
    if (historial.length > 0) {
        socket.write('Historial de mensajes:\n');
        historial.forEach((msg, index) => {
            socket.write(`${index + 1}: ${msg}\n`);
        });
    } else {
        socket.write('No hay mensajes en el historial.\n');
    }

    socket.on('data', (data) => {
        const message = data.toString().trim();
        historial.push(message);

        // Mantener solo los últimos 10 mensajes
        if (historial.length > 10) {
            historial.shift();
        }

        socket.write(`Mensaje recibido: ${message}\n`);
    });

    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });
});

server.listen(3000, () => {
    console.log('Servidor con historial de mensajes escuchando en el puerto 3000');
});