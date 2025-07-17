// Paso 1: Importamos el modulo net
const net = require('net')

// Paso 2: Configuracion de la conexion
const PORT = 5000;
const HOST = 'localhost'

// Paso 3: Creamos la conexion al servidor usando net.createConnection
const client = net.createConnection({ port: PORT, host: HOST }, () => {
    // Paso 4: Mensaje para la conexion
    console.log('Conectado al servidor');

    // Paso 5: enviamos un mensaje inicial al servidor
    client.write('Hola, servidor!')

    // Paso 6: Configuramos tiempo de espera 
    client.setTimeout(1000, () => {
        console.log('Tiempo de espera alcanzado, cerrando conexion...');
        client.end()
    });

    // Paso 7: Pausamos la recepcion de datos despues de 2 segundos
    setTimeout(() => {
        console.log('Pausando la recepcion de datos...');
        client.pause()

        setTimeout(() => {
            console.log('Reanudando la recepcion de datos...');
            client.resume()

            client.write('Otro mensaje despues de reanudar...')
        }, 3000)
    }, 2000)
})

// ESTO VA LA PROX CLASE
client.on('error', (err) => {
    console.error('Error:', err.message);
})

// Paso 8: Para permitir que el proceso de node termine si no hay mas tareas pendientes
client.unref()

// Paso 9: Para mantener activo el proceso mientras la conexion siga abierta
client.ref()

setTimeout(() => {
    console.log('Destruyendo el socket...');
    client.destroy()
}, 5000)