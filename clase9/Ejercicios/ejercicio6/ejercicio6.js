const net = require('net');

let intentosFallidos = 0;
const maxIntentos = 5;

function conectarCliente() {
    if (intentosFallidos >= maxIntentos) {
        console.log('❌ Se alcanzó el máximo de intentos. Saliendo del programa.');
        return;
    }

    const client = net.createConnection({ port: 5000 }, () => {
        console.log('✅ Conectado al servidor');
        client.write('¡Hola, servidor!');
        intentosFallidos = 0; // Resetear intentos si la conexión es exitosa
    });

    client.on('data', (data) => {
        console.log('📩 Datos recibidos:', data.toString());
    });

    client.on('error', (err) => {
        console.error('⚠️ Error en la conexión:', err.message);
    });

    client.on('close', () => {
        console.log(`⚠️ Conexión cerrada. Intentando reconectar... (${intentosFallidos + 1}/${maxIntentos})`);
        intentosFallidos++;
        setTimeout(conectarCliente, 2000);
    });
}

conectarCliente();


