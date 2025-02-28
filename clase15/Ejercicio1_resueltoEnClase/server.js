// paso 1: Importamos los modulos necesarios
const net = require('net') // servidor
const fs = require('fs') // archivos
const path = require('path') // rutas

// paso 2: definimos la ruta donde se guardaran los mensajes en formato json
const rutaMensajes = path.join(__dirname, 'mensajes.json')

// paso 3: verificamos si el archivo json existe y si no que se cree con un array vacio
if (!fs.existsSync(rutaMensajes)) {
    fs.writeFileSync(rutaMensajes, '[]', 'utf-8')
}

// paso 4: creamos el servidor
const server = net.createServer((socket) => {
    console.log('cliente conectado');

    // Manejamos los datos recibidos del cliente
    socket.on('data', (data) => {
        const mensaje = data.toString().trim() // toString convierte buffer a texto y trim saca espacios

        //si el mensaje recibido es "/historial", enviamos todos los mensajes almacenados
        if (mensaje === '/historial') {
            // leemos el contenido del archivo mensaje.json
            const historial = fs.readFileSync(rutaMensajes, 'utf8')
            // enviamos el historial (todos los mensaje)
            socket.write(`Historial de mensajes: \n${historial}`)
        } else {
            // si no me manda ese comando hacer lo siguiente
            // leemos el archivo json y los convertimos en un array de objetos
            const mensajes = JSON.parse(fs.readFileSync(rutaMensajes, 'utf-8') || '[]')
            // agregamos el nuevo mensaje con la fecha y hora actual
            mensajes.push({ fecha: new Date().toISOString(), mensaje })
            //guardamos el array actualizado en el archivo mensajes.json con un formato legible
            fs.writeFileSync(rutaMensajes, JSON.stringify(mensajes, null, 2), 'utf-8')
            // enviamos una confirmacion de que se guardo bien al cliente
            socket.write('Mensaje guardado correctamente')
        }
    })

    // manejamos la desconexion del cliente
    socket.on('end', () => {
        console.log('cliente desconectado');
    })
})

//paso 5: inicio del servidor
server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
})