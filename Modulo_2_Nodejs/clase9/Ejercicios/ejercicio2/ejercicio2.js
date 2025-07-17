const net = require('net');

const client = net.createConnection({ port: 5000 }, () => {
    console.log('✅ Conectado al servidor');
    client.write('¡Hola, servidor!');
});

client.on('data', (data) => {
    console.log('📩 Datos recibidos:', data.toString());
});

setTimeout(() => {
    console.log('⏸️ Pausando recepción de datos...');
    client.pause();
}, 3000);

setTimeout(() => {
    console.log('▶️ Reanudando recepción de datos...');
    client.resume();
}, 8000);

setTimeout(() => {
    console.log('🔚 Cerrando conexión...');
    client.end();
}, 15000);
