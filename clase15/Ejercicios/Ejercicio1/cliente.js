const net = require('net');

const client = net.createConnection({ port: 3000 }, () => {
    console.log('Conectado al servidor');
    client.write('Hola, servidor!\n');
});

client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
});

client.on('end', () => {
    console.log('Desconectado del servidor');
});
