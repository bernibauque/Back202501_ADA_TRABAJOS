//  PASO 1: Importamos el modulo NET
const net = require('net');

// PASO 2: Creamos el servidor TCP usando la funcion de createServer del modulo net
const server = net.createServer((socket) => {
    // Este mensaje aparece cuando un cliente se conecta al servidor
    console.log('Un cliente se ha conectado!');

    // Escuchamos el evento 'data' que se activa cuando el cliente envia datos al servidor
    socket.on('data', (data) => {
        // mostrara en consola el mensaje recibido de cliente
        console.log('Mensaje recibido: ', data.toString());
    })

    // Escuchamos el evento 'end' que se activa cuando el cliente se deesconecta del servidor
    socket.on('end', () => {
        console.log('El cliente se ha desconectado');
    })
})

// PASO 3: Definimos el puerto en el que el servidor estara escuchando conexiones
const PORT = 4000;

// Iniciamos el servidor y lo ponemos a escuchar en el puerto especifico
server.listen(PORT, () => {
    //Mostramos un mensaje por consola indicando que el servidor esta listo
    console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
})