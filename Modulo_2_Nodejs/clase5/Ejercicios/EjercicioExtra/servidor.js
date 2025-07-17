// Importamos el módulo 'net', que nos permite trabajar con servidores TCP.
const net = require('net');

// Creamos una variable global para contar cuántos clientes están conectados.
// Iniciamos el contador en 0.
let clientesConectados = 0;

// Creamos el servidor TCP utilizando 'net.createServer'.
// La función dentro de 'createServer' se ejecutará cada vez que un cliente se conecte.
const server = net.createServer((socket) => {
    // Ejercicio: Incrementar el contador al conectar un cliente.
    clientesConectados++; // Aumentamos el contador al conectar un cliente.

    // Mostramos el número actual de clientes conectados en la consola.
    console.log(`¡Un cliente se ha conectado! Clientes conectados: ${clientesConectados}`);

    // Escuchamos el evento 'data' para recibir datos del cliente.
    socket.on('data', (data) => {
        // Convertimos el buffer recibido a texto legible usando .toString().
        const mensaje = data.toString();

        // Mostramos el mensaje del cliente en la consola.
        console.log(`Mensaje recibido del cliente: ${mensaje}`);

        // Enviamos una respuesta al cliente usando 'socket.write'.
        const respuesta = '¡Hola, cliente! Tu mensaje fue recibido correctamente.';
        socket.write(respuesta); // Esto envía el mensaje de vuelta al cliente.
    });

    // Escuchamos el evento 'end' para saber cuándo el cliente se desconecta.
    socket.on('end', () => {
        // Ejercicio: Decrementar el contador al desconectar un cliente.
        clientesConectados--; // Reducimos el contador cuando el cliente se desconecta.

        // Mostramos el número actual de clientes conectados en la consola.
        console.log(`Un cliente se ha desconectado. Clientes conectados: ${clientesConectados}`);
    });
});

// Definimos el puerto en el que el servidor estará escuchando.
const PORT = 5000;

// Hacemos que el servidor "escuche" en el puerto definido.
server.listen(PORT, () => {
    // Mostramos un mensaje en la consola indicando que el servidor está listo.
    console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
});
