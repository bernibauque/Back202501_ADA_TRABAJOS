const net = require('net');

// Conectar al servidor en el puerto 8082
const client = net.createConnection({ port: 8082 }, () => {
    console.log('Conectado al servidor');

    // Enviar una ruta completa
    client.write('/home/user/docs/file.txt'); // Ruta completa de ejemplo
});

// Leer la respuesta del servidor
client.on('data', (data) => {
    console.log('Información de la ruta:\n', data.toString());
    client.end(); // Terminar la conexión después de recibir la respuesta
});

client.on('end', () => {
    console.log('Desconectado del servidor');
});
