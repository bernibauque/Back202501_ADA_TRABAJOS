// Ejercicio 1: Conectar y enviar un mensaje al servidor
const net = require('net');
const client = net.createConnection({ port: 5000, host: 'localhost' });

client.on('connect', () => {
    console.log('✅ Conectado al servidor');
    client.write('¡Hola, servidor!');
});

client.on('data', (data) => {
    console.log('📩 Datos recibidos:', data.toString());
});

// Ejercicio 2: Implementar un timeout en la conexión
client.setTimeout(5000, () => {
    console.log('⏳ Tiempo de espera agotado');
    client.end();
});

// Ejercicio 3: Pausar y reanudar la recepción de datos
client.on('data', (data) => {
    console.log('📩 Recibido:', data.toString());
    client.pause();
    setTimeout(() => {
        console.log('▶️ Reanudando recepción de datos');
        client.resume();
    }, 3000);
});

// Ejercicio 4: Manejo de errores en la conexión
client.on('error', (err) => {
    console.log('❌ Error:', err.message);
});

client.on('close', () => {
    console.log('⚠️ Conexión cerrada inesperadamente');
});

// Ejercicio 5: Detectar cuando el servidor cierra la conexión
client.on('end', () => {
    console.log('🔌 Servidor cerró la conexión');
});

// Ejercicio 6: Cliente interactivo con la usuaria
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function enviarMensaje() {
    readline.question('Escribe un mensaje: ', (msg) => {
        if (msg === 'salir') {
            client.end();
            readline.close();
        } else {
            client.write(msg);
            enviarMensaje();
        }
    });
}
client.on('connect', enviarMensaje);

// Ejercicio 7: Cliente que destruye el socket al fallar
client.on('error', () => {
    console.log('🚫 Conexión destruida');
    client.destroy();
});

// Ejercicio 8: Cliente con unref/ref para control de procesos
client.unref();
setTimeout(() => {
    console.log('🔄 Manteniendo proceso activo con ref()');
    client.ref();
}, 5000);

// Ejercicio 9: Cliente que reconecta automáticamente
function reconectar() {
    setTimeout(() => {
        console.log('🔄 Reintentando conexión...');
        client.connect(5000, 'localhost');
    }, 3000);
}
client.on('error', reconectar);
client.on('close', reconectar);

// Ejercicio 10: Cliente que detecta pérdida de conexión
let timeout = setTimeout(() => {
    console.log('⚠️ No hay datos del servidor, cerrando conexión');
    client.end();
}, 10000);
client.on('data', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log('⚠️ No hay datos del servidor, cerrando conexión');
        client.end();
    }, 10000);
});
