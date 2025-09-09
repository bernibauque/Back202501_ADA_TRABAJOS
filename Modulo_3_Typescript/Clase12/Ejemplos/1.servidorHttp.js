const http = require('http')

const server = http.createServer((req, res) => {
    // Establece el codigo de estado de la res json
    res.statusCode = 200

    // configuran el encabezadol para el cliente sepa que el contenido es texto plano
    res.setHeader('Content-type', 'text/plain')

    res.end('Hola chicas')
})

server.listen(3000, () => {
    console.log('Servidor ejecutandose en http://localhost:3000');
})