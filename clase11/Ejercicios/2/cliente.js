const net = require('net');

// Conectar al servidor en el puerto 8081
const client = net.createConnection({ port: 8081 }, () => {
    console.log('Conectado al servidor');

    // Enviar rutas con barras redundantes y puntos
    client.write('./docs/../file.txt'); // Ruta con barras redundantes y puntos
    client.write('docs/./file.txt');    // Otra ruta con puntos
});

// Leer la respuesta del servidor
client.on('data', (data) => {
    console.log('Ruta normalizada:', data.toString());
    client.end(); // Terminar la conexión después de recibir la respuesta
});

client.on('end', () => {
    console.log('Desconectado del servidor');
});
