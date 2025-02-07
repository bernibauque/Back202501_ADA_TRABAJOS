// PASO 1: Importamos el modulo net
const net = require('net')

// PASO 2: Creamos el servidor
const server = net.createServer()

// PASO 3: Manejar el evento 'connection' que se emite cuando un 
// cliente se conecta al servidor
server.on('connection', (socket) => {
    // manejando el evento data
    socket.on('data', (data) => {
        console.log('\nEl cliente ' + socket.remoteAddress + socket.remotePort + "dice: " + data);
        // confirmacion de recepcion de datos
        socket.write('Recibi tu mensaje senor cliente!')
    })

    // manejamos el evento close
    socket.on('close', () => {
        console.log('Comunicacion finalizada');
    })
    // manejamos el evento error
    socket.on('error', (err) => {
        console.log(err.message);
    })
})

// PASO 4: Iniciamos el servidor
server.listen(4000, () => {
    console.log('Servidor escuchando en el puerto', server.address().port);
})