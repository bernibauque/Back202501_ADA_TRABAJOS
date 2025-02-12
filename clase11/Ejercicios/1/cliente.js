const net = require('net');

// Conectar al servidor en el puerto 8080
const client = net.createConnection({ port: 8080 }, () => {
    console.log('Conectado al servidor');

    // Enviar varias rutas como comandos
    client.write('/home/user/documento.txt'); // Comando 1: Ruta absoluta
    client.write('documento.txt'); // Comando 2: Ruta relativa
    client.write('/another/path/to/file'); // Comando 3: Otra ruta absoluta
});

// Leer la respuesta del servidor
client.on('data', (data) => {
    console.log(data.toString());
    client.end(); // Terminar la conexión después de recibir la respuesta
});

client.on('end', () => {
    console.log('Desconectado del servidor');
});

