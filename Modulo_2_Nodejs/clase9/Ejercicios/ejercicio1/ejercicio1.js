const net = require('net');

function conectarCliente() {
    const client = net.createConnection({ port: 5000 }, () => {
        console.log('✅ Conectado al servidor');
        client.write('¡Hola, servidor!');
    });

    // Manejar datos recibidos
    client.on('data', (data) => {
        console.log('📩 Servidor dice:', data.toString());
    });

    // Manejar cierre de conexión y reconectar
    client.on('close', () => {
        console.log('⚠️ Conexión cerrada. Reintentando en 3 segundos...');
        setTimeout(conectarCliente, 3000);
    });

    // Manejar errores
    client.on('error', (err) => {
        console.error('❌ Error en la conexión:', err.message);
    });
}

conectarCliente();





