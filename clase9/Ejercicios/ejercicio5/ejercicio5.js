const net = require('net');

const client = net.createConnection({ port: 5000 }, () => {
    console.log('✅ Conectado al servidor');
    client.write('¡Hola, servidor!');
});

client.on('data', (data) => console.log('📩 Datos recibidos:', data.toString()));
client.on('end', () => console.log('🔚 Servidor cerró la conexión.'));
client.on('close', () => console.log('🚪 Conexión cerrada.'));
client.on('error', (err) => console.error('❌ Error:', err.message));

setTimeout(() => {
    console.log('🛠️ Llamando a unref()...');
    client.unref();
}, 10000);

setTimeout(() => {
    console.log('🔄 Llamando a ref()...');
    client.ref();
}, 15000);

setTimeout(() => {
    console.log('🔚 Finalizando conexión...');
    client.end();
}, 20000);


