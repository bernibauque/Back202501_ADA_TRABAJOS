const net = require('net');

const client = net.createConnection({ port: 5000 }, () => {
    console.log('✅ Conectado al servidor');
    client.write('¡Hola, servidor!');
});

setInterval(() => {
    console.log('📤 Enviando mensaje automático...');
    client.write('Mensaje automático');
}, 5000);

setTimeout(() => {
    console.log('🔚 Cerrando conexión...');
    client.end();
}, 20000);




