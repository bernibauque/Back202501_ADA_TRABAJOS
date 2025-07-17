// Importamos los módulos necesarios
const net = require('net');  // Módulo para crear un servidor TCP
const fs = require('fs');    // Módulo para manejar archivos (leer y escribir JSON)
const path = require('path'); // Módulo para manejar rutas de archivos

// Definimos la ruta donde se guardarán los mensajes en formato JSON
const rutaMensajes = path.join(__dirname, 'mensajes.json');

// Verificamos si el archivo mensajes.json existe, si no, lo creamos con un array vacío
if (!fs.existsSync(rutaMensajes)) {
    fs.writeFileSync(rutaMensajes, '[]', 'utf-8');
}

// Creamos el servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado'); // Mensaje en la consola cuando un cliente se conecta

    // Manejamos los datos recibidos del cliente
    socket.on('data', (data) => {
        const mensaje = data.toString().trim(); // Convertimos el buffer a string y eliminamos espacios extra

        // Si el mensaje recibido es "/historial", enviamos todos los mensajes almacenados
        if (mensaje === '/historial') {
            // Leemos el contenido del archivo mensajes.json
            const historial = fs.readFileSync(rutaMensajes, 'utf-8');

            // Enviamos el historial al cliente
            socket.write(`Historial de mensajes:\n${historial}\n`);
        } else {
            // Si no es "/historial", se trata de un mensaje nuevo

            // Leemos el archivo JSON y lo convertimos en un array de objetos
            const mensajes = JSON.parse(fs.readFileSync(rutaMensajes, 'utf-8') || '[]');

            // Agregamos el nuevo mensaje con la fecha y hora actual
            mensajes.push({ fecha: new Date().toISOString(), mensaje });

            // Guardamos el array actualizado en el archivo mensajes.json con formato legible
            fs.writeFileSync(rutaMensajes, JSON.stringify(mensajes, null, 2), 'utf-8');

            // Enviamos una confirmación al cliente
            socket.write('Mensaje guardado correctamente\n');
        }
    });

    // Manejamos la desconexión del cliente
    socket.on('end', () => {
        console.log('Cliente desconectado'); // Mensaje en la consola cuando el cliente se desconecta
    });
});

// Iniciamos el servidor en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor TCP escuchando en el puerto 3000');
});
