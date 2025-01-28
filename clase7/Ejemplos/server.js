// Paso 1: Importamos modulo NET
const net = require('net')

// Paso 2: Creamos el servidor tcp utilizando el metodo createServer del modulo net
// este metodo recibe una funcion de callback que se ejecuta cada vez que un cliente se conecta al servidor
const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado al servidor');

    // Paso 3: Agregamos los eventos
    // 1. Evento data: Se emite cuando el servidor recibe datos del cliente
    socket.on('data', (data) => {
        console.log(`Datos recibidos del cliente ${data.toString()}`);
        // Podemos responder al cliente enviandole un mensaje de respuesta
        socket.write('Mensaje recibido por el servidor')
    })

    //2. Evento end: Se emite cuando el cliente cierra la conexion de manera ordenada
    socket.on('end', () => {
        console.log('El cliente ha cerrado la conexion');
    })

    //3. evento error: Se emite cuando ocurre un error en el socket
    socket.on('error', (err) => {
        console.error(`Error en la conexion: ${err.message}`);
    })

    //4. evento close: Se emite cuando el socket se cierrra ya sea de manera abrupta o ordenada
    socket.on('close', () => {
        console.log('La conexion con el cliente se ha cerrado');
    })

    //5. evento timeout:Se emite cuando se alcanza el tiempo de espera definido por setTimeOut para recibir datos
    socket.on('timeout', () => {
        console.log('Se ha alcanzado el tiempo de espera sin recibir datos.');
        // podemos cerrar la conexion si se alcanza el timeout
        socket.end()
    })
    // configuramos un tiempo de espera
    socket.setTimeout(5000) // 5000 = 5 segundos
})

// 6. evento connection 
server.on('connection', (socket) => {
    console.log(`Nueva conexion establecida`);
})

// Paso 4: Ponemos el servidro a escuchar en el puerto
const PORT = 3000
server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
})

// 7. evento listening: Se emite cuando e servidor comienza a escuchar en el puerto especifico
server.on('listening', () => {
    console.log('El servidor esta listo para recibir conexiones');
})

// 8. evento error: Se emite si ocurre un error al intentar iniciar el servidor
server.on('error', (err) => {
    console.error(`Error al iniciar el servidor: ${err.message}`);
})

// 9. evento close: Se emite cuando el servidor se cierra
server.on('close', () => {
    console.log(('El servidor se ha cerrado'));
})