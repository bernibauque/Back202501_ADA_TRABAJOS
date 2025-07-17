const net = require('net')
const { v1: uuidv1, v3: uuidv3, v4: uuidv4, v5: uuidv5 } = require('uuid')

const NAMESPACE = uuidv3.URL

const server = net.createServer((socket) => {
    // generamos uuids de diferentes versiones para la conexion
    const idv1 = uuidv1()
    const idv3 = uuidv3("usuario", NAMESPACE)
    const idv4 = uuidv4()
    const idv5 = uuidv5("usuario", NAMESPACE)

    //imprimimos los uuids en consola
    console.log("Conexion establecida");
    console.log("UUID V1:", idv1);
    console.log("UUID V3:", idv3);
    console.log("UUID V4:", idv4);
    console.log("UUID V5:", idv5);

    //manejamos el evento data
    socket.on('data', (data) => {
        console.log(`Datos recibidos: ${data}`);
    })

    //manejamos el evento end
    socket.on('end', () => {
        console.log('Conexion finalizada');
    })
})

server.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
})