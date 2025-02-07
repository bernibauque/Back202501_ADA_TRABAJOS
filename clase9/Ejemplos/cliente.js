const net = require('net');

// Crear una conexión TCP con el servidor en el puerto 5000
const client = net.createConnection({ port: 5000 }, () => {
    console.log("🔗 Conectado al servidor");

    // Enviar un mensaje al servidor al conectarse
    client.write("¡Hola, servidor! Soy el cliente 🚀");
});

// 📩 Evento 'data': Manejar datos recibidos del servidor
client.on('data', (data) => {
    console.log("📩 Mensaje recibido:", data.toString());
});

// 🛑 Evento 'end': Se ejecuta cuando el servidor cierra la conexión
client.on('end', () => {
    console.log("🔚 El servidor ha cerrado la conexión");
});

// 🚪 Evento 'close': Se ejecuta cuando la conexión se cierra completamente
client.on('close', () => {
    console.log("🚪 Conexión cerrada con el servidor");
});

// ⚠️ Evento 'error': Manejar errores en la conexión
client.on('error', (err) => {
    console.log("⚠️ Error en la conexión:", err.message);
});

// ⏳ client.setTimeout(timeout, callback): Cerrar la conexión si no hay respuesta en 10 segundos
client.setTimeout(10000, () => {
    console.log("⏳ Tiempo de espera agotado. Cerrando conexión...");
    client.end(); // Finalizar la conexión
});

// ✋ client.pause(): Pausar la recepción de datos (simulación)
setTimeout(() => {
    console.log("⏸️ Pausando recepción de datos...");
    client.pause();
}, 5000);

// ▶️ client.resume(): Reanudar la recepción de datos después de una pausa
setTimeout(() => {
    console.log("▶️ Reanudando recepción de datos...");
    client.resume();
}, 7000);

// 💥 client.destroy(): Cerrar y liberar todos los recursos inmediatamente
setTimeout(() => {
    console.log("💥 Destruyendo la conexión...");
    client.destroy();
}, 12000);

// 🏁 client.unref(): Permitir que el proceso termine si no hay operaciones pendientes
setTimeout(() => {
    console.log("⚡ Eliminando la referencia del socket...");
    client.unref();
}, 13000);

// 🔄 client.ref(): Mantener activo el proceso de Node.js mientras haya conexión
setTimeout(() => {
    console.log("🔄 Manteniendo la conexión activa...");
    client.ref();
}, 15000);

// 🔚 client.end(): Finalizar la conexión correctamente
setTimeout(() => {
    console.log("🔚 Finalizando la conexión correctamente...");
    client.end();
}, 17000);
