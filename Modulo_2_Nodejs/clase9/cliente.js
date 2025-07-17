const net = require('net')

const client = net.createConnection({ port: 5000 }, () => {
    console.log('Conectando al servidor... ');
    client.write('Hola servidor, soy el cliente')
})

client.on('data', (data) => {
    console.log('Mensaje recibido', data.toString());
})

client.on('end', () => {
    console.log('El servidor ha cerrado la conexion');
})

client.on('close', () => {
    console.log('conexion cerrada con el servidor');
})

client.on('error', (err) => {
    console.log('Error: ', err.message);
})

client.setTimeout(() => {
    console.log('Pausando la recepcion de datos');
    client.pause()
}, 5000);

client.setTimeout(() => {
    console.log('Reanudando la recepcion de datos');
    client.resume()
}, 7000);

client.setTimeout(() => {
    console.log('Destruyendo la conexion.');
    client.destroy()
}, 12000);

client.setTimeout(() => {
    console.log('Eliminando la referencia del socket');
    client.uref()
}, 13000);

client.setTimeout(() => {
    console.log('Manteniendo la conexion activa');
    client.ref()
}, 15000);


client.setTimeout(() => {
    console.log('Cierre correcto de conexion');
    client.end()
}, 17000);