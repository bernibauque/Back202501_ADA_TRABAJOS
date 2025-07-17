const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado.');

    socket.on('data', (data) => {
        const command = data.toString().trim();

        switch (command) {
            case 'fecha':
                socket.write(`Fecha y hora: ${new Date().toLocaleString()}\n`);
                break;
            case 'ip':
                socket.write(`Tu IP es: ${socket.remoteAddress}\n`);
                break;
            case 'salir':
                socket.write('Cerrando conexión...\n');
                socket.end();
                break;
            default:
                socket.write('Comando no reconocido.\n');
        }
    });

    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});


