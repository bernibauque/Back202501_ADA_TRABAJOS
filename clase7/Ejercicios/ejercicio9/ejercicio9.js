const net = require('net');
const fs = require('fs');

const server = net.createServer((socket) => {
    console.log('Cliente conectado.');

    let fileData = Buffer.alloc(0);
    let fileSize = 0;

    socket.on('data', (data) => {
        fileData = Buffer.concat([fileData, data]);
        fileSize += data.length;

        if (fileSize > 1048576) { // 1 MB
            socket.write('El archivo excede el tamaño máximo permitido (1 MB).\n');
            socket.end();
            return;
        }

        socket.write(`Recibidos ${fileSize} bytes...\n`);
    });

    socket.on('end', () => {
        if (fileSize <= 1048576) {
            fs.writeFile('archivo_recibido.txt', fileData, (err) => {
                if (err) {
                    console.error('Error al guardar el archivo:', err);
                } else {
                    console.log('Archivo guardado correctamente.');
                    socket.write('Archivo recibido y guardado.\n');
                }
            });
        }
    });

    socket.on('error', (err) => {
        console.error('Error en la conexión:', err.message);
    });
});

server.listen(3000, () => {
    console.log('Servidor de transferencia de archivos escuchando en el puerto 3000');
});