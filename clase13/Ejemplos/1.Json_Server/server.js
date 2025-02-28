// Paso 1: Importamos el modulo http para crear el servidor (solicitudes)
// importamos tambien fs para trabajar con los archivos
const http = require('http')
const fs = require('fs')

// Paso 2: Definimos el puerto
const PORT = 3000

// Creamos el servidor
const server = http.createServer((req, res) => {
    // leemos el archivo datos.json
    fs.readFile('datos.json', 'utf8', (err, data) => {
        if (err) {
            // si hay un error mostramos un mensaje
            res.end('No se pudo leer el archivo JSON') // mensaje de error
            return;
        }
        // enviamos el contenido del archivo json al navegador 
        res.setHeader('Content-Type', 'application/json') //configuramos el tipo de contenido
        res.end(data) // enviamos el contenido del archivo json
    })
})

server.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
})

