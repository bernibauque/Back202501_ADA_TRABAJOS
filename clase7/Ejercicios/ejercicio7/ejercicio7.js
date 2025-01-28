const net = require('net');
const clients = [];

const server = net.createServer((socket) => {
    clients.push(socket);
    console.log('Nuevo cliente conectado.');

    socket.write('Bienvenido al chat!\n');

    // Notificar a todos los clientes sobre la nueva conexión
    clients.forEach(client => {
        if (client !== socket) {
            client.write('Un nuevo usuario se ha unido al chat.\n');
        }
    });

    socket.on('data', (data) => {
        const message = data.toString().trim();
        // Retransmitir el mensaje a todos los clientes
        clients.forEach(client => {
            if (client !== socket) {
                client.write(`Mensaje: ${message}\n`);
            }
        });
    });

    socket.on('end', () => {
        clients.splice(clients.indexOf(socket), 1);
        console.log('Cliente desconectado.');
        // Notificar a todos los clientes sobre la desconexión
        clients.forEach(client => {
            client.write('Un usuario ha abandonado el chat.\n');
        });
    });
});

server.listen(3000, () => {
    console.log('Servidor de chat escuchando en el puerto 3000');
});