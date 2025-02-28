// paso 6: importacion en el cliente
const net = require('net')

//paso 7: creamos al cliente
const client = net.createConnection({ port: 3000 }, () => {
    console.log('conectado al servidor');
    client.write('hola servidor')
})
// evento data
client.on('data', (data) => {
    console.log('Respuesta del servidor: ', data.toString());
})

// evento end
client.on('end', () => {
    console.log('Descconectado del servidor');
})
