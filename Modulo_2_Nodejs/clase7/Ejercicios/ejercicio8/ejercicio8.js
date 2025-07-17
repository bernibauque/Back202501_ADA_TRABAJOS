const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado.');

    let authenticated = false;

    socket.write('Por favor, ingresa tu nombre de usuario:\n');

    socket.on('data', (data) => {
        if (!authenticated) {
            const input = data.toString().trim();
            if (input === 'usuario:contraseña') { // Credenciales simples
                authenticated = true;
                socket.write('Autenticación exitosa. Puedes enviar mensajes.\n');
            } else {
                socket.write('Credenciales incorrectas. Cerrando conexión...\n');
                socket.end();
            }
        } else {
            const message = data.toString().trim();
            socket.write(`Mensaje recibido: ${message}\n`);
        }
    });

    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });
});

server.listen(3000, () => {
    console.log('Servidor de autenticación escuchando en el puerto 3000');
});